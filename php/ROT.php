<?php
$short_options = "t:";
$long_options = ["text:"];
$options = getopt($short_options, $long_options);
$paste = isset($options["t"]) ? $options["t"] : $options["text"];
$text = base64_decode($paste);
function rot5($string){
    for ($i = 0, $j = strlen( $string); $i < $j; $i++)  
    {     
        $char = ord($string[$i]);      
        if( ($char >= 48  && $char <= 57))  
        { 
            $char += 5;          
            if( $char > 57) 
            { 
                $char -= 10; 
            } 
        }     
        $string[$i] = chr($char); 
    }  
     return $string; 
    }
function rot47($text) {
    $ersetzen = array(    "!" => "P" , "\""=> "Q" , "#" => "R" , "\$"=> "S" , "%" => "T" ,
                        "&" => "U" , "\'"=> "V" , "(" => "W" , ")" => "X" , "*" => "Y" ,
                        "+" => "Z" , "," => "[" , "-" => "\\", "." => "]" , "/" => "^" ,
                        "0" => "_" , "1" => "`" , "2" => "a" , "3" => "b" , "4" => "c" ,
                        "5" => "d" , "6" => "e" , "7" => "f" , "8" => "g" , "9" => "h" ,
                        ":" => "i" , ";" => "j" , "<" => "k" , "=" => "l" , ">" => "m" ,
                        "?" => "n" , "@" => "o" , "A" => "p" , "B" => "q" , "C" => "r" ,
                        "D" => "s" , "E" => "t" , "F" => "u" , "G" => "v" , "H" => "w" ,
                        "I" => "x" , "J" => "y" , "K" => "z" , "L" => "{" , "M" => "|" ,
                        "N" => "}" , "O" => "~" , "P" => "!" , "Q" => "\"" ,"R" => "#" ,
                        "S" => "\$" ,"T" => "%" , "U" => "&" , "V" => "\'" ,"W" => "(" ,
                        "X" => ")" , "Y" => "*" , "Z" => "+" , "[" => "," , "\\"=> "-" ,
                        "]" => "." , "^" => "/" , "_" => "0" , "`" => "1" , "a" => "2" ,
                        "b" => "3" , "c" => "4" , "d" => "5" , "e" => "6" , "f" => "7" ,
                        "g" => "8" , "h" => "9" , "i" => ":" , "j" => ";" , "k" => "<" ,
                        "l" => "=" , "m" => ">" , "n" => "?" , "o" => "@" , "p" => "A" ,
                        "q" => "B" , "r" => "C" , "s" => "D" , "t" => "E" , "u" => "F" ,
                        "v" => "G" , "w" => "H" , "x" => "I" , "y" => "J" , "z" => "K",
                        "{" => "L" , "|" => "M" , "}" => "N" , "~" => "O" );

    return stripslashes(strtr($text, $ersetzen));
}
function rot30($rot30) {
    $zameni = array(    
                        "a" => "к" , "6" => "л" , "в" => "м" , "r" => "н" , "д" => "o" ,
                        "e" => "п" , "ж" => "p" , "з" => "c" , "и" => "т" , "й" => "y" ,
                        "ф" => "x" , "ц" => "ч" , "ш" => "ъ" , "щ" => "ь" , "ю" => "я" ,
                        "0" => "@" , "1" => "€" , "2" => "%" , "3" => "-" , "4" => "+" ,
                        "5" => "*" , "6" => "§" , "7" => "=" , "8" => "." , "9" => "!" ,

                        "к" => "a" , "л" => "6" , "м" => "в" , "н" => "r" , "o" => "д" ,
                        "п" => "e" , "p" => "ж" , "c" => "з" , "т" => "и" , "y" => "й" ,
                        "x" => "ф" , "ч" => "ц" , "ъ" => "ш" , "ь" => "щ" , "я" => "ю" ,
                        "@" => "0" , "€" => "1" , "%" => "2" , "-" => "3" , "+" => "4" ,
                        "*" => "5" , "§" => "6" , "=" => "7" , "." => "8" , "!" => "9" );

    return stripslashes(strtr($rot30, $zameni));
}
echo "ROT5  : ".rot5($text)."\n";
echo "ROT13 : ".str_rot13($text)."\n";
echo "ROT30 : ".rot30($text)."\n";
echo "ROT47 : ".rot47($text)."\n";
?>
