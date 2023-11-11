let check = localStorage.getItem('check');
let userh = document.querySelector('.username');
let exit = document.querySelector('.exit');
let sign_in = document.querySelector('.btn_signin')
let comps= document.querySelector('.computers')


if (check === 'true') {
  userh.innerHTML = `Istifaeci adi: ${JSON.parse(localStorage.getItem('user')).login}`;
  exit.style.display = 'inline';
  sign_in.style.display = 'none'
  comps.style.display = 'inline'
}


exit.addEventListener('click', () => {
  localStorage['check'] = false
  alert('you haveleft your account')
  userh.innerHTML = 'Istifadeci adi:'
  exit.style.display = 'none'
  sign_in.style.display = 'inline'
  comps.style.display = 'none'
  localStorage.clear()
})
