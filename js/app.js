function setContent(url){
    document.getElementById('contentFrame').src = url;
}


function getB64Mode(){
    let conv_mode = document.getElementById('convert_mode').value;
    let inp = document.getElementById('input');
    let out = document.getElementById('output');
    let out_frame = document.getElementById('out_frame');

    console.log(out_frame.children);

    if(conv_mode != "bti"){
        let inp_box = document.createElement("input");
        inp_box.setAttribute('id', 'output')
        out_frame.children[0].replaceWith(inp_box)
    }
    if (conv_mode == "atb"){
        inp.setAttribute("type","text");
        out.setAttribute("type","text");
    }
    if (conv_mode == "bta"){
        inp.setAttribute("type","text");
        out.setAttribute("type","text");
    }
    if (conv_mode == "itb"){
        inp.setAttribute("type", "file");
        inp.setAttribute("accept", "image/png, image/jpeg");

        out.setAttribute("type","text");
    }
    if (conv_mode == "bti"){
        inp.setAttribute("type","text");

        let inp_box = document.createElement("img");
        inp_box.setAttribute('id', 'output')
        inp_box.setAttribute('class','preview_image')
        out_frame.children[0].replaceWith(inp_box)
    }
}

function convertB64() {
    let conv_mode = document.getElementById('convert_mode').value;
    let inp = document.getElementById('input');
    let out = document.getElementById('output');
    let inp_value = `${inp.value}`;
    console.log(inp_value)
    if (conv_mode == "none"){
        console.log('adwawdawddawdawdawd');
        out.setAttribute("class", "error")
        out.value = "please select a convertion mode";
    }
    if (conv_mode == "atb"){
        out.value = btoa(inp_value);
    }
    if (conv_mode == "bta"){
        out.value = atob(inp_value);
    }
    if (conv_mode == "itb"){
        console.log(inp.files)
        let file_type = inp.files[0].type;
        let reader = new FileReader();
        let cont = reader.readAsText(inp.files[0], "UTF-8");
        out.value = btoa(cont);
    }
    if (conv_mode == "bti"){
        let data_type = "";
        if (atob(inp_value).split('\n')[0].includes("PNG")){
            data_type = 'png';
        }
        if (atob(inp_value).split('\n')[0].includes("PNG")){
            data_type = 'jpeg';
        }
        out.setAttribute('src', `data:image/${data_type};base64,${inp_value}`)
        out.setAttribute('width','400')
        out.setAttribute('height','400')      
    }
}