from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User

class UserRegistrationForm(forms.ModelForm):
    class Meta:
        model = User
        fields = [  'username', 'email', 'password', 'phone' ]

    def save(self, commit=True) -> User:
        user = super().save(commit=False)
        user.username = self.cleaned_data["email"]
        user.email = self.cleaned_data["email"]
        user.set_password(self.cleaned_data["password"])
        user.first_name = self.cleaned_data["username"]
        if commit:
            user.save()
        return user
