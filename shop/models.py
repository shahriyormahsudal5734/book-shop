from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=200)
    def __str__(self):
        return str(self.title)
        

class Books(models.Model):
    title = models.CharField(max_length=200)
    price = models.IntegerField()
    categ = models.ForeignKey(Category,on_delete=models.CASCADE)
    page = models.IntegerField()
    img = models.ImageField(upload_to='book/')
    def __str__(self):
        return str(self.title)