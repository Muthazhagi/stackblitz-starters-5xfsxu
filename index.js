let i;
    for (i=1; i<=100; i++)
    {
    
        if (i%3 == 0)   
            document.write("google" + " ");
         
        else if ((i%3) == 0)
            document.write("facebook" + " ");               
    
        else if ((i%5) == 0 && (i%3) == 0)                   
            document.write("amazon" + " ");               
     
        else       
            document.write(i + " ");               
    }
