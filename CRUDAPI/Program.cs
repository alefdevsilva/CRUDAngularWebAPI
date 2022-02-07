using CRUDAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddControllers();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

/*
builder.Services.AddDbContext<Contexto>(opcoes => opcoes.UseSqlServer("ConexaoBD")

);
*/
builder.Services.AddDbContext<Contexto>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoBD"));

});

builder.Services.AddCors();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


//app.UseCors(opcoes => opcoes.AllowOrigin().AllowAnyMethod().AloowAnyHeader());

app.UseCors(opcoes => opcoes.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();


app.UseAuthorization();

app.MapControllers();

app.Run();


