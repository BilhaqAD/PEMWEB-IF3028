const nama = document.getElementById('nama');
const job = document.getElementById('job');
const PText = document.querySelector('P#text');
const Btn = document.getElementById('mybtn');
const Btn2 = document.getElementById('mybtn1');
const Btn3 = document.getElementById('mybtn2');
const myImg = document.querySelector('div', 'img');    

Btn.addEventListener("click", changeText);
Btn2.addEventListener("click", changePhoto);
Btn3.addEventListener("click", changePage);

function addExperience() {
    const inputElement = document.querySelector('#input-experience'); // Input Elemen

    const experienceName = inputElement.value; // Mengambil input

    if(!experienceName) 
        return alert('Input kosong, silahkan di isi!'); // Pengecekan Data input

    const el = document.createElement('li'); // Tambah data pada list.
    el.innerText = experienceName;
    document.querySelector('#experience').appendChild(el);

    inputElement.value = ''; // Membersihkan Input
}

function changeText(){
    nama.innerHTML="Bilhaq Avi Dewantara";
    job.innerHTML="Front-End Developer";
    PText.innerHTML="Result-driven Informatics Engineering sutdent from Sumatera Institute of Technology passionate on develop user-friendly software. Good problem-solving, fast learner, and ability to perform well in a team.";
}

function changePhoto(){
    myImg.innerHTML='<img src="PP.jpg" alt="Photo ganteng saya" title="ini saya">';
}

function changePage(){
    var styles = `body{
        background: linear-gradient(90deg, rgba(190,36,195,255) 0%, rgba(79,0,120,255) 100%);
        color: #ffffff;
        display:grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    #profile-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #e9c0f4;
        color: #000000;
        border-radius: 10px;
        padding: 0px;
        margin: 20px;
        width: 720px;
    }
    
    .foto {
        display: flex;
        justify-content: center;
    }
    
    img {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        margin: 20px;
    }
    
    .bio{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .bio > h1 {
        text-align: center;
        font-size: 20px;
    } h1[id=nama]{
        text-transform: uppercase;
    }
    .bio > p {
        text-align: justify;
        margin: 20px 30px;
    }
    
    #experience-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #e9c0f4;
        color: #000000;
        border-radius: 10px;
        padding: 0px;
        margin: 20px;
        width: 720px;
    }
    
    .list-experience {
        margin-left: 40px;
        margin-bottom: 20px;
    }
    
    .list-experience > h1 {
        text-align: center;
    }
    ul, li {
        margin-left: 2rem;
        font-size: 1.2rem;
    }
    
    .adding-experience{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    button[id=input]{
        color: #ffffff;
        font-weight: bold;
        background: linear-gradient(90deg, rgba(119,57,163,1) 0%, rgba(26,117,255,1) 100%);;
        cursor: pointer;
        padding: 8px;
        margin: 4px;
    }
    
    #input-experience{
        width: 25%;
        padding: 8px;
    }
    
    #button-wrapper{
        display: flex;
        justify-content: space-evenly;
        align-items: center;   
    }
    .btn{
        font-weight: bold;
        cursor: pointer;
        padding: 8px;
        margin: 4px;
        width: 20%;
        border-radius: 5px;
    }
    
    .btn:hover{
        background: linear-gradient(90deg, rgba(119,57,163,1) 0%, rgba(26,117,255,1) 100%);;
        color: #ffffff;
    }`;
    var styleSheet = document.querySelector('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}



