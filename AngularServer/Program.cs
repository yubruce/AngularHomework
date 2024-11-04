using AngularServer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);
//配置跨域
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
    builder =>
    {
        //允许所有来源/所有头/所有 HTTP 方法
        builder.AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<EfDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection2")));
// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
//var scope = app.Services.CreateScope();
//scope.ServiceProvider.GetRequiredService<EfDbContext>().Database.EnsureCreated();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

//启用跨域
app.UseCors();
app.UseAuthorization();

app.MapControllers();

app.Run();
