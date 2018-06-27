<pre>
<?php
    // 设置中文编码
header('content-type:text/html;charset=utf-8');

    // 接收用户上传的图片
    // 获取上传的文件信息 (超全局变量)
    /*
    array(1) {
        ["icon"]=>
        array(5) {
            ["name"]=> 文件名
            string(20) "V-暴走型_icon.png"
            ["type"]=> 文件类型
            string(9) "image/png"
            ["tmp_name"]=>临时的名字
            string(44) "C:\Users\51772\AppData\Local\Temp\php8A4.tmp"
            ["error"]=> 错误 0是没有错
            int(0)
            ["size"]=> 大小 字节
            int(1985)
        }
    }
 */
    // var_dump($_FILES);

    // 让php代码 稍微休息一会 
    // 这一行代码的目的 是让 我们看到那个临时文件 
    // 不是必须的
    // sleep(2);

    // 抢救这个文件 否则就会被删除
    // 移动上传的文件
    // 参数1 移动的文件
    // 参数2 保存的位置
    // 保存的位置 ./upload/ xxx.png
    // 字符串拼接 在js中 +
    // php中使用 . 
    // $targetPath = './upload/'.$_FILES['icon']['name'];
    // echo $targetPath;

    // 修改文件的乱码问题
    /*
        解决问题的步骤
            遇到问题
            baidu google 找到关键字
            去文档找到 对于关键字的 解释
            使用 找到的函数即可
 */
    // 使用iconv转换编码
    // 参数1 输入的编码
    // 参数2 输出的编码 windows操作系统的 文件名的编码格式是 GBK
    // 参数3 要转换的字符串
    // $targetPath_gbk = iconv('utf-8','gbk',$targetPath);


    // move_uploaded_file($_FILES['icon']['tmp_name'],$targetPath_gbk);

    // 使用自己封装的函数 保存文件
        // 文件上传
        

function my_uploadFile($key, $targetFile)
{
            // 转换 文件名的编码格式
    $fileName = $_FILES[$key]['name'];
    
            // 文件转码
    $fileName_gbk = iconv('utf-8', 'gbk', $fileName);
    
            // 移动临时文件
            // 拼接路径 保存文件
    move_uploaded_file($_FILES[$key]['tmp_name'], $targetFile . $fileName_gbk);
    
            // 返回 文件名
    return $fileName;
}
// 参数1 上传的文件的key
// 参数2 目标文件夹
my_uploadFile('icon','./imgs/')

?>
</pre>