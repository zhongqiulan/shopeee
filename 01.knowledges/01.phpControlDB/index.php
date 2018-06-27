<?php
    // 设置中文编码
    header('content-type:text/html;charset=utf-8');

    // 连接数据库
    $link = mysqli_connect('localhost','root','root','test');

    // 准备SQL语句
    // 增加
    // $sql_insert = "insert into stars (userName,userIcon,userInfo) values('jack','xiaolizi.png','jumpSea')";
    // 删除
    // $sql_delete = "delete from stars where userName = 'jack' ";
    // 修改
    // $sql_update = "update stars set userName ='哇傻逼' where id = 10";
    // 查询
    $sql_select = "select * from stars";

    // 执行SQL语句
    // mysqli_query($link,$sql_insert);
    // mysqli_query($link,$sql_delete);
    // mysqli_query($link,$sql_update);
    // $result = mysqli_query($link,$sql_select);
    // $data = mysqli_fetch_all($result);
    $data = mysqli_fetch_all(mysqli_query($link,$sql_select));
    var_dump($data);

    // 查(解析结果)  增删改(获取受影响的行数)
    $rowNum = mysqli_affected_rows($link);
    // echo $rowNum;

    // 关闭数据库的连接
    mysqli_close($link);

?>