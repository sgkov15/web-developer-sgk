let t = '';
            let t1 = '';
            let t2 = '';
            let t3 = '';
            let t11 = 0;
            let t22 = 0;
            let t33 = 0;
function buy1(){
                t1 = 'Гостинная СОВРЕМЕННЫЙ - 30000 руб';
                t11 = 30000;
                console.log(document.getElementById("d_1").style.color = "red");
                
            }
            
function buy2(){
                t2 = 'Гостинная  КЛАССИЧЕСКИЙ - 50000 руб';
                t22 = 50000;
                 console.log(document.getElementById("d_2").style.color = "red");
            }
            
function buy3(){
                t3 = 'Гостинная НЕОКЛАССИЦИЗМ - 45000 руб';
                t33 = 45000;
                 console.log(document.getElementById("d_3").style.color = "red");
            }
            
          
        
function test(){
                alert('Ваш заказ: \n'+t1+'\n'+t2+'\n'+t3+'\n'+'\nОбщая сумма заказа: '+(t11+t22+t33)+' руб');
            }