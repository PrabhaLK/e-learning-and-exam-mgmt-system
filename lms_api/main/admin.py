from django.contrib import admin
from . import models

#import models form models.py

admin.site.register(models.Teacher) #teacher model
admin.site.register(models.CourseCategory) # course category model
admin.site.register(models.Course) #course model
admin.site.register(models.Student) #student model