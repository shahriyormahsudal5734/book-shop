from django.shortcuts import render
from .models import *
from django.db.models import Q

def homepage(request):
    q = request.GET.get('q') if request.GET.get('q') !=  None  else '' 
    data2= Category.objects.all()
    data1 = Books.objects.filter(
        Q(categ__title__icontains=q)|
        Q(title__icontains=q)
        )
    mydata = {
        'data1':data1,
        'data2':data2,
        'q':q,
    }

    return render(request, 'index.html',context=mydata)

def card(request):
    return render(request, 'card.html')