var defaultValue = document.querySelector('.InpTextBox').value;
var newValue;
        var inputs = [3];
        var ind = 0,ind1, result;
        var arr = [3];
        var count = 0;
        function  InpValue_of_textBox(ch){
            if(parseInt(defaultValue) == 0){
                document.querySelector('.InpTextBox').value = "";
                defaultValue = ch;
                count++;
            }
            if( ch == '='){
                try{
                    if(inputs[1] == '+'){
                        result = parseInt(inputs[0]) + parseInt(inputs[2]);
                        document.querySelector('.InpTextBox').value = result
                    }
                }
                catch{
                    result ="invalid values";
                    document.querySelector('.InpTextBox').value = result

                }
                if(document.querySelector('.InpTextBox').value != "0" && document.querySelector('.InpTextBox').value != ""){
                    ind1 = document.querySelector('.InpTextBox').value;
                    console.log();
                }
            }
            else if(ch !== '='){
                if((defaultValue !== ch || count == 0) && ch.charCodeAt() != 67){
                    var a = ch ;
                    console.log(a.charCodeAt());
                    if(ch.charCodeAt() == 67)
                    {
                        clear();
                    }
                    else if (ch.charCodeAt() > 47 &&  ch.charCodeAt() < 58){
                        newValue = defaultValue + ch;
                        document.querySelector('.InpTextBox').value = newValue ;

                        try{
                            while(ind < 3){
                                inputs[ind-1] = defaultValue;
                                ind++;
                                break;
                            }
                        }
                        catch{

                        }
                    }
                    else if (ch.charCodeAt() > 41 &&  ch.charCodeAt() < 44){
                        defaultValue = defaultValue + " " + ch + " ";
                        document.querySelector('.InpTextBox').value = defaultValue ;
                        try{
                            while(ind < 3){
                                inputs[ind] = ch;
                                ind++;
                                break;
                            }
                        }
                        catch{

                        }
                    }
                    else if(ch == "+"){
                        try{
                            while(ind < 3){
                                inputs[ind] = ch;
                                ind++;
                                break;
                            }
                        }
                        catch{

                        }
                    }
                }
                else{
                    var a = ch ;
                    console.log(a.charCodeAt());
                    if(ch.charCodeAt() == 67)
                    {
                        clear();
                        return;
                    }
                    else if (ch.charCodeAt() > 47 &&  ch.charCodeAt() < 58){
                        document.querySelector('.InpTextBox').value = defaultValue
                        try{
                            while(ind < 3){
                                inputs[ind] = ch;
                                ind++;
                                count = 0;
                                break;
                            }
                        }
                        catch{

                        }
                    }
                }
            }
        }
        function clear(){
            document.querySelector('.InpTextBox').value = "0";
            inputs = arr;
            defaultValue = "0";
            ind=0;
       }