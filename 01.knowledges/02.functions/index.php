<?php
    // js 函数 如何定义 function sayHello(){}
    // 设置中文编码
    header('content-type:text/html;charset=utf-8');


    // 无参数 无返回值的函数
    function sayHello(){
        echo '你好,吃了没';
    }

    // sayHello();

    // 有参数,无返回值的
    function sayHelloToSomeone($name){
        echo $name;
        echo '很高兴遇见你,你还是那么的惊艳';
    }
    // sayHelloToSomeone('赵*波');
    // sayHelloToSomeone('龙**');

    // 有参数,有返回值的
    function sum($numA,$numB){
        return $numA+$numB;
    }

    // $result = sum(998,2);
    // echo $result;

?>