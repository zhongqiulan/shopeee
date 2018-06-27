<?php
    // 使用php操纵数据库 执行 增删改
    // 增删改的函数
    function my_ZSG($sql){
        // 连接数据库
        $link = mysqli_connect('localhost','root','root','test');

        // 准备SQL语句 让用户 传入SQL语句即可

        // 执行SQL语句
        mysqli_query($link,$sql);

        // 获取受影响的行数
        $rowNum = mysqli_affected_rows($link);

        // 关闭连接
        mysqli_close($link);

        // 返回行数 给用户 要咋整 咋整
        return $rowNum;
    }

    // 查询的函数
    function my_SELECT($sql){
        // 连接数据库
        $link = mysqli_connect('localhost','root','root','test');
        // 准备sql语句

        // 执行SQL语句
        $result = mysqli_query($link,$sql);

        // 解析结果
        $data = mysqli_fetch_all($result);

        // 关闭连接
        mysqli_close($link);

        // 返回结果
        return $data;
    }

    // 文件上传
    function my_uploadFile($key,$targetFile){
        // 转换 文件名的编码格式
        $fileName = $_FILES[$key]['name'];

        // 文件转码
        $fileName_gbk = iconv('utf-8','gbk',$fileName);

        // 移动临时文件
        // 拼接路径 保存文件
        move_uploaded_file($_FILES[$key]['tmp_name'],$targetFile.$fileName_gbk);

        // 返回 文件名
        return $fileName;
    }
?>