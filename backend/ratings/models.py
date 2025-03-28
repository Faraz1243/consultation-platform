from django.db import models

class Rating(models.Model):
    """
    Model to store user ratings for consultants.
    """
    user = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
        related_name='ratings'
    )
    consultant = models.ForeignKey(
        'consultants.Consultant',
        on_delete=models.CASCADE,
        related_name='ratings'
    )
    rating = models.PositiveSmallIntegerField()  # Ratings can be integers (e.g., 1 to 5)
    comment = models.TextField(blank=True, null=True)  # Optional feedback
    created_at = models.DateTimeField(auto_now_add=True)  # When the rating was given
    updated_at = models.DateTimeField(auto_now=True)  # If the rating is updated

    class Meta:
        # Ensure the user has a completed appointment with the consultant
        # models.CheckConstraint(
        #         check=Q(user__appointments__consultant=models.F("consultant")) & Q(user__appointments__status="completed"),
        #         name="user_must_have_completed_appointment"
        #     ),
        unique_together = ('user', 'consultant')  # Prevent duplicate ratings by the same user for the same consultant
        ordering = ['-created_at']  # Newest ratings first

    def __str__(self):
        return f"Rating: {self.rating} by {self.user} for {self.consultant}"
