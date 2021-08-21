    	const $video = document.querySelector('#video')
    	const $play = document.querySelector('#play')
    	const $pause = document.querySelector('#pause')
        const $Back = document.querySelector('#Back')
        const $Up = document.querySelector('#Up')
        const $Rango = document.querySelector('#Rango')
        


    	$play.addEventListener('click', handlePlay)
    	$pause.addEventListener('click', handlePause)
        $Back.addEventListener('click', handleBack)
        $Up.addEventListener('click', handleUp)
        
    	
    	function handlePlay () {
    		$video.play()
    		$play.hidden = true
    		$pause.hidden = false
    		console.log ("play")
    	}
    	
        function handlePause () {
    		$video.pause()
    		$play.hidden = false
    		$pause.hidden = true
    		console.log ("pause")
    	}
        
        function handleBack () {
            $video.currentTime = $video.currentTime - 10
            console.log("back")
        }

        function handleUp () {
            $video.currentTime = $video.currentTime + 10
            console.log("up")
        }

        $video.addEventListener('loadedmetadata', handleProgress)
        $video.addEventListener('timeupdate', handleUpdateTime)
        $Rango.addEventListener('input', handleInput)

        function handleProgress () {
            $Rango.max = $video.duration 
            console.log ("esta cargando")
        }

        function handleUpdateTime (){
            $Rango.value = $video.currentTime
        }

        function handleInput (){
            $video.currentTime = $Rango.value
        }