var icon = document.getElementById('icon');

icon.addEventListener('click', function () {
    document.body.classList.toggle('lighttheme');
    if (document.body.classList.contains('lighttheme')) {
        icon.src = 'moon.png';
    } else {
        icon.src = 'sun.png';
    }
});

alert ('Find all your favorite movies here!!!');

function showPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// const content = document.querySelectorAll('.content');
// const buttons = document.querySelectorAll('.btn');

// content.forEach((content)=>{
//     content.addEventListener('click', function(){
//         const btn = content.querySelector('.btn')
//         if(content.style.height == '300px'){
//             content.style.height = '400px';
//             btn.style.display = 'block'
//         }
//     })
// });

document.querySelector('.href="login.php"').addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah navigasi ke anker (default)
    var loginSection = document.querySelector('.login');
    loginSection.style.display = 'block';

});
