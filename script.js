

$(document).ready(function(){
  

   
    
    if (document.URL.includes('backend.html')){

            localStorage.clear();
         
            

        if(items == undefined || items.length == 0){

           
            var items = [];
            debugger
        
        }
        
       
       
        $("#submit_btn").bind('click',function($event){
        
            debugger
            $event.preventDefault(); //or each time the script is loaded take the data value from the  local storage..
            var title = $("#platform");
         
            var platform = title.val();


            var email = $("#email").val();

            var num = $("#number");
          
            var number = num.val();

            var type_ = $("#type");
         
            var type = type_.val();


            
            var object ={name: platform,email: email, num: number,type : type}
            


           
           
         //   console.log("before itemset")

          
                items.push(object);
                localStorage.setItem("form",JSON.stringify(items));
               // window.location.href = 'Dashboard.html';
                debugger
            
           
           
          //  console.log("after itemset")

            
            
            
           // localStorage.setItem(,object);
          
           
           

            //store the array of object at the end into the array of objects.

        })
       

    }

    
    if (document.URL.includes('Dashboard.html')){

     
    



        items = JSON.parse(localStorage.getItem("form") || null);//"[]"
        debugger
       
       if(items != undefined){//check
        for(var i=0 ; i<items.length;i++){


           // var key = localStorage.key( i );


            initialize_cards();
          
            var name = items[i].name;

            debugger
            switch(name) {
              
                case 'facebook':

                    var fb = `<i class="fa-brands fa-square-facebook" style="color: #2458b2;"></i>`
                    $(".platform").eq(i).html(fb);
                    $(".card").eq(i).css("box-shadow"," 0px -5px  0px #198ff5")
                    debugger
                  // code block
                     break;
                case 'twitter':
                    var tw = `<i class='fa-brands fa-twitter' style='color: #235fc7;'></i>`
                    $(".platform").eq(i).html(tw)
                    $(".card").eq(i).css("box-shadow"," 0px -5px  0px #198ff5")
                  // code block
                     break;
                case 'instagram':
                    var inst = `<i class='fa-brands fa-instagram' style='color: #af3e31;'></i>`
                    $(".platform").eq(i).html(inst)
                    $(".card").eq(i).css({
                    'border-top' : '6px solid',
                   
                    'border-image': 'linear-gradient(to right, #d1a56a, #d35292) 1 0 0 0'
                      });
                    debugger
                    break;
                case 'youtube':
                    var yout = `<i class='fa-brands fa-youtube' style='color: #be0404;'></i>`
                    $(".platform").eq(i).html(yout)
                    $(".card").eq(i).css("box-shadow"," 0px -5px  0px  #c2042b")
                   
                    break;

                default:
                    console.log("icon not available");
               
              }
         
           // var platform = $(".platform")

            
           $(".email").eq(i).text(items[i].email);


           // platform[i].text(items[i].name);
           
          
            //$(".followers")[i].text(items[i].num);

            $(".followers").eq(i).text(items[i].num);



            $(".type").eq(i).text(items[i].type);
            debugger
        
        }}

       
   
        $("#checkbox").bind('click', function(e) {
            
           // e.preventDefault();
            debugger
            document.body.classList.toggle('dark');
debugger
           //switch fn
          
        })

        
    }


  });



  function initialize_cards(){


    var temp = `
    <div class="col-md-4 mb-5">

    <div class="card">
        <div class="card-body text-light text-center">

            <div class="dropdown d-flex justify-content-center">

               
                 <div class="platform">    </div>
                 <h5 class="email px-2">     </h5>
              

            </div>

            <h1 class="followers pt-5 ">

                

            </h1>
        
            
            <div class="type mb-5 pt-5">
            
            </div>
        </div>
    </div>
</div>
    
    `

    $("#row").append(temp)


  }


  function switch_theme(){



  }