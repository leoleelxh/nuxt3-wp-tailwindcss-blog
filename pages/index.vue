<template>


    <div id="maincontainer" class=" w-full flex flex-col overflow-hidden">
        <Indexbanner />
        <div class="bannertext pt-32 md:pt-16 h-96 absolute top-0">
            <h1 data-aos="fade-up" class=" text-4xl text-gray-400 dark:text-gray-500">
                Introduction
            </h1>
            <h1 data-aos="fade-up" class=" pt-8 text-4xl  lg:text-6xl leading-tight  font-bold dark:text-gray-200 ">
                I used to be engaged in industrial design, UXUI designer. I have served
                Huawei, Ali, Tencent and other companies successively. 
            </h1>

            <div data-aos="fade-up" class="btns w-full h-auto pt-16  flex flex-col md:flex-row">
               <NuxtLink to="/projects"><div
                    class="mainbtn text-xl text-white rounded-full w-40 h-16 mb-6 bg-blue-500 flex justify-center items-center hover:shadow-lg ">
                    View
                    Projects
                </div>
                </NuxtLink>
                <div class="subbtn  text-xl text-blue-500  rounded-full  w-40 h-16  md:ml-8 bg-white border border-blue-400 
                    hover:shadow-lg flex justify-center items-center">
                    Contact me
                </div>
            </div>
        </div>
        <div class="mainintro   w-full h-auto text-xl text-gray-800 dark:text-gray-200 leading-8 grid gap-4 grid-cols-1 md:grid-cols-2 ">
            <div data-aos="fade-up" class=" lefttext  ">I like design, because design can solve the problems in our life. When I encounter problems, I design first, which has
            gradually become my attitude towards life and way of thinking.</div>
            <!-- <div class="h-full w-8"></div> -->
            <div data-aos="fade-up" class=" righttext   ">I love code because code is the way to implement a design. For a good design to be implemented, a full-stack design
            method is required to ensure the continuity of design ideas.</div>
        </div>
        <div data-aos="fade-up" class="cards pt-16 w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div data-aos="fade-up" class="  h-fit bg-gray-100 rounded-lg overflow-hidden hover:shadow-sm">
                <img class=" w-full h-auto object-cover" src="../assets/img/poe-image-1.webp" alt="">
                <div class=" p-6">
                    <h1 class=" text-2xl pt-2 font-bold">Full of Skills</h1>
                    <h1 class="  pt-6">Possess rich UXUI design skills, both product and operation.</h1>
                    <NuxtLink to="/skill">
                        <div class=" mt-6 w-1/2 h-10 bg-black 
                    rounded-full text-white flex justify-center items-center hover:bg-gray-800">More
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div data-aos="fade-up" class="  h-fit bg-gray-100 rounded-lg overflow-hidden hover:shadow-sm">
                <img class=" w-full h-auto object-cover" src="../assets/img/poe-image-6.webp" alt="">
                <div class=" p-6">
                    <h1 class=" text-2xl pt-2 font-bold">Lot of projects</h1>
                    <h1 class="  pt-6">Successful C-end and B-end large-scale App design.</h1>
                    <NuxtLink to="/projects">
                        <div class=" mt-6 w-1/2 h-10 bg-black 
                                rounded-full text-white flex justify-center items-center hover:bg-gray-800">More
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div data-aos="fade-up" class="  h-fit bg-gray-100 rounded-lg overflow-hidden hover:shadow-sm">
                <img class=" w-full h-auto object-cover" src="../assets/img/poe-image-8.webp" alt="">
                <div class=" p-6">
                    <h1 class=" text-2xl pt-2 font-bold">Update myself</h1>
                    <h1 class="  pt-6">Pay attention to design trends, technology trends, and thinking.</h1>
                    <NuxtLink to="/categories">
                        <div class=" mt-6 w-1/2 h-10 bg-black 
                                rounded-full text-white flex justify-center items-center hover:bg-gray-800">More
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>


    </div>


</template>

<script>

// //3D banner

// import * as THREE from "three";
// import OrbitControls from 'orbit-controls-es6';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// export default {
//     mounted: function () {
//         this.canvas();
//     },
//     methods: {
//         canvas() {
//             // console.log('1111');
//             // console.log(OrbitControls);


//             // Canvas
//             const canvas = document.getElementById('webgl')

//             // Scene
//             const scene = new THREE.Scene()

//             //gltf loader

//             let mixer = null
//             const gltfloader = new GLTFLoader()
//             console.log(gltfloader);
//             gltfloader.load("/three-assets/twist.gltf",

//                 (gltf) => {
//                     console.log(gltf, 'gltf')

//                     mixer = new THREE.AnimationMixer(gltf.scene)
//                     const action = mixer.clipAction(gltf.animations[0])

//                     console.log(action);

//                     action.play()

//                     gltf.scene.scale.set(.8, .8, .8)

//                     scene.add(gltf.scene)
//                 });


//             /**
//            * lights
//            */
//             const ambientLight = new THREE.AmbientLight(0xffffff, 1)
//             scene.add(ambientLight)
//             const pointLight = new THREE.PointLight(0xffffff, 0.5)
//             scene.add(pointLight)
//             pointLight.position.z = 3
//             pointLight.position.x = 3
//             pointLight.position.y = 3

//             const pointLight2 = new THREE.PointLight(0xffffff, 0.5)
//             scene.add(pointLight2)
//             pointLight2.position.z = 3
//             pointLight2.position.x = -3
//             pointLight2.position.y = 3
//             /**
//              * Objects
//              */
//             // const geometry = new THREE.BoxGeometry(1, 1, 1)
//             // const material = new THREE.MeshNormalMaterial()
//             // const mesh = new THREE.Mesh(geometry, material)
//             // scene.add(mesh)


//             /**
//              * Sizes
//              */
//             const sizes = {
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             }

//             /**
//              * Camera
//              */
//             const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
//             camera.position.z = 2.5
//             camera.position.y = 0
//             camera.position.x = .2

//             scene.add(camera)


//             // Controls
//             // new OrbitControls(camera, canvas)
//             // camera.position.z = 50
//             // const controls = new OrbitControls(camera, canvas)
//             // controls.enableDamping = true
//             // controls.enableZoom = false
//             // // controls.enableDamping = false
//             // controls.autoRotate = true
//             // controls.autoRotateSpeed = -0.5
//             // controls.minPolarAngle = 0; // radians
//             // controls.maxPolarAngle = Math.PI; // radians

//             // // How far you can orbit horizontally, upper and lower limits.
//             // //             If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
//             // //????????????????????????
//             // controls.minAzimuthAngle = - Infinity; // radians
//             // controls.maxAzimuthAngle = Infinity; // radians



//             /**
//              * Renderer
//              */
//             const renderer = new THREE.WebGLRenderer({
//                 canvas: canvas,
//                 alpha: true
//             })
//             renderer.setSize(sizes.width, sizes.height)
//             renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//             addEventListener('resize', () => {
//                 camera.aspect = innerWidth / innerHeight
//                 camera.updateProjectionMatrix()
//                 renderer.setSize(innerWidth, innerHeight)
//             })

//             /**
//          * Animate 
//          */
//             const clock = new THREE.Clock()
//             let previousTime = 0
//             const tick = () => {
//                 /**
//                 * Animate Start
//                 */
//                 const elapsedTime = clock.getElapsedTime()
//                 const deltaTime = elapsedTime - previousTime
//                 previousTime = elapsedTime
//                 // gltf.scene.position.x = Math.sin(elapsedTime)

//                 //update mixer
//                 if (mixer != null) { mixer.update(deltaTime) }

//                 // Update controls
//                 // controls.update()

//                 // Render
//                 renderer.render(scene, camera)

//                 // Call tick again on the next frame
//                 window.requestAnimationFrame(tick)
//             }

//             tick()
//         }
//     }
// }

</script>

<style lang="scss" scoped>

</style>
