let login = document.querySelector('.inp_login');
let pass = document.querySelector('.inp_pass');
let conf = document.querySelector('.enter_btn');
let check = false

conf.addEventListener('click', () => {
  if (login.value == JSON.parse(localStorage.getItem('user')).login && pass.value == JSON.parse(localStorage.getItem('user')).password) {
    alert('Correct!');
    check = true
    document.location.href = '../home_page/index.html';
  } else {
    alert('You have a mistake');
  }
  localStorage.setItem('check',check)
});
