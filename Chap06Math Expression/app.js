                // 01
// var number = +prompt("enter any number");
// document.write("<b>Resuld</b> <br> The value of a number is :",number,"<br>......................<br><br>");
// document.write("The value of number is ",++number,"<br>now the value of number is : ",number,"<br><br><br>");
// document.write("The value of number is ",number++,"<br>now the value of number is : ",number,"<br><br><br>");
// document.write("The value of number is ",--number,"<br>now the value of number is : ",number,"<br><br><br>");
// document.write("The value of number is ",number--,"<br>now the value of number is : ",number,"<br><br><br>");


                //    02

//  var a = 2;
//  var b = 1;
// var result = --a - --b - --b + ++ b + b--;
// var result = --a;  output  1
// var result = --a - --b;   output  1
// var result = --a - --b  + ++b;  output  2
// var result = --a - --b + ++b + b--;  output 3
// document.write("a is : <br>",a,"</br><br>");
// document.write("a is : <br>",b,"</br><br>");
// document.write("result is : <br>",result,"</br></br></br></br>");

              
            //   03


// var ues_name = prompt("enter your name");
// alert("hellow"  , ues_name  , " nice to meet you");



            // 04



// var table =prompt("Enter a table number you want to print :" ,6);
// var increment =1;
// document.write("<b> Table of " ,table, "</b></b>"

//           ,table, " x " , " increment , " = " ,table*increment, "
//           ,table, " x " , ++increment , " = ",table*increment , "<br>"
//           ,table, " x " , ++increment , " = ",table*increment , "<br>"
//           ,table, " x " , ++increment , " = ",table*increment , "<br>"
//           ,table, " x " , ++increment , " = ",table*increment , "<br>"
//           ,table, " x " , ++increment , " = ",table*increment , "<br>"
//           ,table, " x " , ++increment , " = ",table*increment , "<br>"
//           ,table, " x " , ++increment , " = ",table*increment , "<br>"
//           ,table, " x " , ++increment , " = ",table*increment , "<br>"
//           ,table, " x " , ++increment , " = ",table*increment , "<br> <br><br>"
//           ); 


            //   05



var subject_one = prompt ("Enter your first subject :");
var subject_one = prompt ("Enter your second subject :");
var subject_one = prompt ("Enter your third subject :");
var first_marks = +prompt ("Enter marks of "+ subject_one);
var second_marks = +prompt ("Enter marks of "+ subject_two);
var third_marks = +prompt ("Enter marks of "+ subject_three);
var total_marks = 100;
var all_subject_total = 100*3;
var obtained_marks = first_marks+second_marks+third_marks;
var percentageOffirst = first_marks/all_subject_total*100;
var percentageOfsecond = second_marks_/all_subject_total*100;
var percentageOfthard = third_marks_all_subject_total*100;
var percentage = obtained_marks/third_marks_all_subject_total*100;
document.write("table boder = '1px'>"+

           "<th>"+"total"+"</th>"+
           "<th>"+"obtaintd"+"</th>"+
           "<th>"+"percentage"+"</th>",
         

          "<tr>"+ 
          "<td>" ,subject_one,"</td>"+
          "<td>" ,first_marks, "</td>"+
          "<td>" ,percentageOffirst, "%" , "</td>"+
          "</tr>"+

          "<tr>"+
          "<td>",subject_one,"</td>"+
          "<td>",first_marks,"</td>"+
          "<td>",percentageOffirst,"%", "</td>"+
          "</tr>"+

          "<tr>",+
          "<td>", subject_one,"</td>"+
          "<td>", first_marks,"</td>"+
          "<td>", percentageOffirst,"%" ,"</td>"+
          "</tr>"+

          "<tr>"+
          "<td>","</td>"+
          "<td><b>",obtained_marks,"</b></td>"+
          "<td><b>",percentage,"%","</b></b>"+
          "</tr>"+


          "</table>");