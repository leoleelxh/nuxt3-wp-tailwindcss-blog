<template>


    <div id="maincontainer" class=" w-full flex flex-col">
        <canvas id="webgl" class=" w-full h-fit overflow-hidden"></canvas>
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
            const gltfloader = new GLTFLoader()
            console.log(gltfloader);
            gltfloader.load("/three-assets/twist.gltf",

                (gltf) => {
                    console.log(gltf, 'gltf')
                    gltf.scene.scale.set(.9, .9, .9)
                    scene.add(gltf.scene)
                });




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
            const containerWidth = document.getElementById('maincontainer').clientWidth
            const containerHeight = document.getElementById('maincontainer').clientHeight
            const sizes = {
                width: containerWidth,
                height: containerHeight
            }

            /**
             * Camera
             */
            const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
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
            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true
            })
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            addEventListener('resize', () => {
                camera.aspect = containerWidth / containerHeight
                camera.updateProjectionMatrix()
                renderer.setSize(containerWidth, containerHeight)
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
}

</script>



<style lang="scss" scoped>

</style>
