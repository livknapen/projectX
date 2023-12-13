// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
 const scene = new THREE.Scene()
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
 const renderer = new THREE.WebGLRenderer({ antialias: true})
 
 renderer.setSize( window.innerWidth, window.innerHeight )
 // sets renderer background color
 renderer.setClearColor(0xEEEEEE)
 document.body.appendChild( renderer.domElement )
 camera.position.z = 7
 
 // resize canvas on resize window
 window.addEventListener( 'resize', () => {
   let width = window.innerWidth
   let height = window.innerHeight
   renderer.setSize( width, height )
   camera.aspect = width / height
   camera.updateProjectionMatrix()
 })
 
 // basic cube
 var geometry = new THREE.BoxGeometry( 1, 1, 1)
 var material = new THREE.MeshStandardMaterial( { color: 0xff0015, flatShading: true, metalness: 0, roughness: 1 })
 var cube = new THREE.Mesh ( geometry, material )
 scene.add( cube )
 
 // wireframe cube
 var geometry = new THREE.BoxGeometry( 5, 5, 5)
 var material = new THREE.MeshBasicMaterial( {
   color: 0x0000FF, wireframe: true, transparent: true
 })
 var wireframeCube = new THREE.Mesh ( geometry, material )
 scene.add( wireframeCube )
 
 // ambient light
 var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.4)
 scene.add( ambientLight )
 
 // point light
 var pointLight = new THREE.PointLight( 0xffffff, 1 );
 pointLight.position.set( 25, 50, 25 );
 scene.add( pointLight );
 
 
 function animate() {
   requestAnimationFrame( animate )
   cube.rotation.x += 0.02;
   cube.rotation.y += 0.02;
   wireframeCube.rotation.x -= 0.01;
   wireframeCube.rotation.y -= 0.01;
   renderer.render( scene, camera )
 }
 animate()