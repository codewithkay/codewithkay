let openbtn = document.getElementById('openbtn');
document.getElementById('openbtn').onclick = openNav;
document.getElementById('closebtn').onclick = closeNav;
document.getElementById('closebtn2').onclick = closeNav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById('openbtn').style.display = 'none'
  document.getElementById('closebtn').style.display = 'block'
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById('openbtn').style.display = 'block'
  document.getElementById('closebtn').style.display = 'none'

}

function colorUpdate(){
  let blog= document.getElementById('blog')
  let sharing= document.getElementById('sharing')
  let course= document.getElementById('course')
  let logos=document.getElementsByClassName('logo')
  let logoArray=Array.from(logos)
  let footer=document.getElementById('footer')
  let details=document.getElementsByClassName('detail')
  let select = document.getElementById('select');
  let value = select.options[select.selectedIndex].value;
  let detailArray= Array.from(details);

  if(value=="green"){
    blog.src='Image/gblog.png'
    sharing.src='Image/gsharing.png'
    course.src='Image/gonline-class.png'

    footer.classList.add('green')
    footer.classList.remove('info')
    footer.classList.remove('blue')

    select.classList.add('green')
    select.classList.remove('blue')
    select.classList.remove('info')
    logoArray.forEach(logo => {
      logo.src='Image/glogo.jpg'
   });
   detailArray.forEach(detail => {
      
      detail.classList.add('green')
      detail.classList.remove('info')
      detail.classList.remove('blue')
   });

  }else if(value=="info"){
    blog.src='Image/blog.png'
    sharing.src='Image/sharing.png'
    course.src='Image/online-class.png'

    footer.classList.add('info')
    footer.classList.remove('green')
    footer.classList.remove('blue')

    select.classList.add('info')
    select.classList.remove('green')
    select.classList.remove('blue')

    detailArray.forEach(detail => {
      detail.classList.add('info')
      detail.classList.remove('green')
      detail.classList.remove('blue')
   });
   logoArray.forEach(logo => {
      logo.src='Image/infologo.jpg'
   });
  }else{
    blog.src='Image/bblog.png'
    sharing.src='Image/bsharing.png'
    course.src='Image/bonline-class.png'

    footer.classList.add('blue')
    footer.classList.remove('info')
    footer.classList.remove('green')
    
    select.classList.add('blue')
    select.classList.remove('green')
    select.classList.remove('info')
    logoArray.forEach(logo => {
      logo.src='Image/blogo.jpg'
   });
    detailArray.forEach(detail => {
      detail.classList.add('blue')
      detail.classList.remove('green')
      detail.classList.remove('info')
   });
  }
}
colorUpdate()
