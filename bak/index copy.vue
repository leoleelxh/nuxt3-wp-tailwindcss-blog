<template>


    <div class="  flex flex-col">
        <canvas id="webgl" class=""></canvas>
        <div class=" pt-16 h-96 absolute top-0">
            <h1 class=" text-4xl text-gray-400">
                Introduction
            </h1>
            <h1 class=" pt-8 text-6xl leading-tight  font-bold ">
                Björk is a simple, clean and fast block theme for blogs and personal websites.
            </h1>
        </div>

    </div>


</template>

<script>
//nav




//3D banner
import {
    Scene,
    BoxGeometry,
    MeshBasicMaterial,
    MeshPhongMaterial,
    MeshNormalMaterial,
    Mesh,
    PerspectiveCamera,
    WebGLRenderer,
    Clock
} from 'three'
import OrbitControls from 'orbit-controls-es6';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export default {
    mounted() {

        // console.log('1111');
        // console.log(OrbitControls);


        // Canvas
        const canvas = document.getElementById('webgl')

        // Scene
        const scene = new Scene()

        //gltf loader
        const gltfloader = new GLTFLoader()
        gltfloader.load(
            './assets/gltf/twist.gltf',
            function (gltf) {
                scene.add(gltf.scene);
            }

        )


        /**
         * Objects
         */
        const geometry = new BoxGeometry(1, 1, 1)
        const material = new MeshNormalMaterial()
        const mesh = new Mesh(geometry, material)
        scene.add(mesh)


        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        /**
         * Camera
         */
        const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 2
        scene.add(camera)


        // Controls
        // new OrbitControls(camera, canvas)
        // camera.position.z = 50
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true
        controls.enableZoom = false
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.5


        /**
         * Renderer
         */
        const renderer = new WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.setSize(sizes.width, 800)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        addEventListener('resize', () => {
            camera.aspect = innerWidth / innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(innerWidth, innerHeight)
        })

        /**
     * Animate 
     */
        const clock = new Clock()
        let previousTime = 0
        const tick = () => {
            /**
            * Animate Start
            */
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime
            //mesh.position.x = Math.sin(elapsedTime)

            // Update controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    }
}

</script>



<style lang="scss" scoped>

</style>
