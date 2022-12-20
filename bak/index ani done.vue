<template>


    <div id="maincontainer" class=" w-full flex flex-col">
        <canvas id="webgl" class=" pt-16  pl-32 w-full h-fit overflow-hidden"></canvas>
        <div class=" pt-16 h-96 absolute top-0">
            <h1 class=" text-4xl text-gray-400">
                Introduction
            </h1>
            <h1 class=" pt-8 text-6xl leading-tight  font-bold ">
                Björk is a simple, clean and fast block theme for blogs and personal websites.
            </h1>
            <div class="btns">
                <div id="mainbtn"></div>
                <div id="subtn"></div>
            </div>
        </div>

    </div>


</template>

<script>
//nav




//3D banner

import * as THREE from "three";
import OrbitControls from 'orbit-controls-es6';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export default {
    mounted: function () {
        this.canvas();
    },
    methods: {
        canvas() {
            // console.log('1111');
            // console.log(OrbitControls);


            // Canvas
            const canvas = document.getElementById('webgl')

            // Scene
            const scene = new THREE.Scene()

            //gltf loader

            let mixer = null
            const gltfloader = new GLTFLoader()
            console.log(gltfloader);
            gltfloader.load("/three-assets/twist.gltf",

                (gltf) => {
                    console.log(gltf, 'gltf')

                    mixer = new THREE.AnimationMixer(gltf.scene)
                    const action = mixer.clipAction(gltf.animations[0])

                    console.log(action);

                    action.play()

                    gltf.scene.scale.set(.9, .9, .9)

                    scene.add(gltf.scene)
                });


            /**
           * lights
           */
            const ambientLight = new THREE.AmbientLight(0xffffff, 1)
            scene.add(ambientLight)
            const pointLight = new THREE.PointLight(0xffffff, 0.5)
            scene.add(pointLight)
            pointLight.position.z = 3
            pointLight.position.x = 3
            pointLight.position.y = 3

            const pointLight2 = new THREE.PointLight(0xffffff, 0.5)
            scene.add(pointLight2)
            pointLight2.position.z = 3
            pointLight2.position.x = -3
            pointLight2.position.y = 3
            /**
             * Objects
             */
            // const geometry = new THREE.BoxGeometry(1, 1, 1)
            // const material = new THREE.MeshNormalMaterial()
            // const mesh = new THREE.Mesh(geometry, material)
            // scene.add(mesh)


            /**
             * Sizes
             */
            const sizes = {
                width: window.innerWidth / 4 * 3,
                height: window.innerHeight
            }

            /**
             * Camera
             */
            const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
            camera.position.z = 2
            camera.position.y = 0
            camera.position.x = -0.5
            scene.add(camera)


            /**
             * Renderer
             */
            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true
            })
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            addEventListener('resize', () => {
                camera.aspect = innerWidth / innerHeight
                camera.updateProjectionMatrix()
                renderer.setSize(innerWidth / 4 * 3 - 64, innerHeight)
            })

            /**
         * Animate 
         */
            const clock = new THREE.Clock()
            let previousTime = 0
            const tick = () => {
                /**
                * Animate Start
                */
                const elapsedTime = clock.getElapsedTime()
                const deltaTime = elapsedTime - previousTime
                previousTime = elapsedTime
                // gltf.scene.position.x = Math.sin(elapsedTime)

                //update mixer
                if (mixer != null) { mixer.update(deltaTime) }

                // Update controls
                // controls.update()

                // Render
                renderer.render(scene, camera)

                // Call tick again on the next frame
                window.requestAnimationFrame(tick)
            }

            tick()
        }
    }
}

</script>



<style lang="scss" scoped>

</style>
