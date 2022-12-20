
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

                    gltf.scene.scale.set(.8, .8, .8)

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
                width: window.innerWidth,
                height: window.innerHeight
            }

            /**
             * Camera
             */
            const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
            camera.position.z = 2.5
            camera.position.y = 0
            camera.position.x = .2

            scene.add(camera)


            // Controls
            // new OrbitControls(camera, canvas)
            // camera.position.z = 50
            // const controls = new OrbitControls(camera, canvas)
            // controls.enableDamping = true
            // controls.enableZoom = false
            // // controls.enableDamping = false
            // controls.autoRotate = true
            // controls.autoRotateSpeed = -0.5
            // controls.minPolarAngle = 0; // radians
            // controls.maxPolarAngle = Math.PI; // radians

            // // How far you can orbit horizontally, upper and lower limits.
            // //             If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
            // //水平方向视角限制
            // controls.minAzimuthAngle = - Infinity; // radians
            // controls.maxAzimuthAngle = Infinity; // radians



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
                renderer.setSize(innerWidth, innerHeight)
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