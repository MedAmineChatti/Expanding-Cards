const removeActiveClasses = (panels) => {
	panels.forEach((p)=>{
		p.classList.remove('active')
	})
} 

// main
const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=>{
	panel.addEventListener('click',() => {
		removeActiveClasses(panels)
		panel.classList.add('active')
	})
})