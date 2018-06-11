<template>
    <div>
        <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                     
                <i class="el-icon-close modal-default-button" @click="$emit('close')"></i>
                    <iframe src="http://wwww.baidu.com"
                            marginheight="0" marginwidth="0" frameborder="0" scrolling="auto"
                            width='100%' height='600' id="iframepage" name="iframepage"  >
                    </iframe>
                        
                </div>
            </div>
        </div>
    </transition>
    </div>
</template>
<script>
export default {
    mounted(){
        $(".modal-container").niceScroll({
             cursorwidth: "5px",
        });
    }
}
</script>
  <style> 
        .modal-mask {
            position: fixed;
            z-index: 9998;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            display: table;
            transition: opacity .3s ease;
        }

        .modal-wrapper {
            display: table-cell;
            vertical-align: middle;
        }

        .modal-container {
            width: 86%;
            margin: 0px auto;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            transition: all .3s ease;
            font-family: Helvetica, Arial, sans-serif;
        }

        .modal-default-button {
            float: right;
            padding:10px 20px;
        }
        .modal-default-button:hover {
            background: red;
            color:#fff;
            font-weight: bold;
           
            /* padding:10px; */
        }
        
    </style>


