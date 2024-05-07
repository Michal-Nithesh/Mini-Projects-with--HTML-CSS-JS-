/*Javascriptpro_*

/*Dont forget to follow me on github,instagram and codepen.*/

let container = document.querySelector('.container');

let userInput = document.querySelector('.container .user-input input');

let lineColorInput = document.querySelector('.container .line-color input');

let bgColorInput = document.querySelector('.container .bg-color input');

let lineColorBox = document.querySelector('.container .line-color div');

let bgColorBox = document.querySelector('.container .bg-color div');

let generateBtn = document.querySelector('.container .generate-btn');

let downloadBtn = document.querySelector('.container .download-btn');

let barcodeBox = document.querySelector('.container .barcode-box');

let svg = document.querySelector('.container .barcode-box svg');

let generateBarcode = () => {

        if (userInput.value != '') {

                JsBarcode('#barcode', userInput.value, {

                        background: bgColorInput.value,

                        lineColor: lineColorInput.value,

                });

                showBox();

                document.querySelector('#barcode').style.display = 'block';

        }

};

let showBox = () => {

        if (!barcodeBox.classList.contains('active')) {

                barcodeBox.classList.add('active');

                setTimeout(() => {

                        container.classList.add('active');

                }, 400)

        }

};

let triggerDownload = (imgURI, filename) => {

        let a = document.createElement('a');

        a.setAttribute('download', 'image.svg')

        a.setAttribute('href', imgURI);

        a.setAttribute('target', '_blank');

        a.click();

}

let save = () => {

        let data = (new XMLSerializer()).serializeToString(svg);

        let svgBlob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' })

        let url = URL.createObjectURL(svgBlob);

        triggerDownload(url);

}

downloadBtn.addEventListener('click', () => {

        if (userInput.value != '') {

                save();

        }

});

generateBtn.addEventListener('click', generateBarcode);

