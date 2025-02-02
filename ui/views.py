from django.http import HttpRequest
from django.shortcuts import render
from jinja2 import Environment, FileSystemLoader
from pyecharts.globals import CurrentConfig
from django.http import HttpResponse

CurrentConfig.GLOBAL_ENV = Environment(loader=FileSystemLoader("./ui/templates"))

from pyecharts import options as opts
from pyecharts.charts import Bar


# Create your views here.
def index(request:HttpRequest):
    return  render(request, 'ui/index.html')

def grid(request:HttpRequest):
    return render(request, 'ui/grid.html')
def charts(request:HttpRequest):
    return render(request, 'ui/charts.html')




def pyecharts_bar(request):
    c = (
        Bar()
        .add_xaxis(["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"])
        .add_yaxis("商家A", [5, 20, 36, 10, 75, 90])
        .add_yaxis("商家B", [15, 25, 16, 55, 48, 8])
        .set_global_opts(title_opts=opts.TitleOpts(title="Bar-基本示例", subtitle="我是副标题"))
    )
    return HttpResponse(c.render_embed())



