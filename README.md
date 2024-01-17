# Website ProjectX Liv Knapen

This is a flat and responsive website designed and coded by Liv Knapen. When you load this website, you will spawn with a character named Ryu in this scene. You will see an arcade with the screen from the streetfighter game. You can move with your keyboard, the character while the camera and spotlight will follow you. When you will reach the correct (X,Y,Z), which is inside the arcade, you will teleport to a new scene where you spawn again as Ryu but than 'in' the game. Here you can only move to left and right, just as the game. The camera will stay centered. After reloading the page you will come back in the first scene.

![Demo Image](/ProjectX/projectx/Media/projectximg.png)


## Contents

- [Folder and File Structure](#folder-and-file-structure)
- [Requirements](#requirements)
- [How to Start](#how-to-start)
- [Site Configuration](#site-configuration)
- [License](#license)


## Folder and File Structure

.
├── Media
│   ├── backgroundscene.jpeg
│   └── projectximg.png
├── Pages
│   ├── Javascript
│   │   ├── arcade.js
│   │   ├── character.js
│   │   ├── main.js
│   │   └── newscene.js
│   ├── arcade.html
│   ├── character.html
│   └── index.html
├── README.md
├── Stylesheets
│   └── stylesheet.css
├── node_modules
│   ├── @esbuild
│   │   └── darwin-x64
│   │       ├── README.md
│   │       ├── bin
│   │       │   └── esbuild
│   │       └── package.json
│   ├── @rollup
│   │   └── rollup-darwin-x64
│   │       ├── README.md
│   │       ├── package.json
│   │       └── rollup.darwin-x64.node
│   ├── arcade_game_-_space_invaders
│   │   ├── license.txt
│   │   ├── scene.bin
│   │   ├── scene.gltf
│   │   └── textures
│   │       ├── CR_videogame_door_baseColor.png
│   │       ├── CR_videogame_door_metallicRoughness.png
│   │       ├── CR_videogame_door_normal.png
│   │       ├── CR_videogame_machine_baseColor.png
│   │       ├── CR_videogame_machine_metallicRoughness.png
│   │       ├── CR_videogame_machine_normal.png
│   │       ├── CR_videogamecoins_baseColor.png
│   │       ├── CR_videogamedesign2_baseColor.png
│   │       └── CR_videogamedesign2_emissive.png
│   ├── esbuild
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── esbuild
│   │   ├── install.js
│   │   ├── lib
│   │   │   ├── main.d.ts
│   │   │   └── main.js
│   │   └── package.json
│   ├── fsevents
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── fsevents.d.ts
│   │   ├── fsevents.js
│   │   ├── fsevents.node
│   │   └── package.json
│   ├── models
│   ├── nanoid
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── async
│   │   │   ├── index.browser.cjs
│   │   │   ├── index.browser.js
│   │   │   ├── index.cjs
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.native.js
│   │   │   └── package.json
│   │   ├── bin
│   │   │   └── nanoid.cjs
│   │   ├── index.browser.cjs
│   │   ├── index.browser.js
│   │   ├── index.cjs
│   │   ├── index.d.cts
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── nanoid.js
│   │   ├── non-secure
│   │   │   ├── index.cjs
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   ├── package.json
│   │   └── url-alphabet
│   │       ├── index.cjs
│   │       ├── index.js
│   │       └── package.json
│   ├── picocolors
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── picocolors.browser.js
│   │   ├── picocolors.d.ts
│   │   ├── picocolors.js
│   │   └── types.ts
│   ├── postcss
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── at-rule.d.ts
│   │   │   ├── at-rule.js
│   │   │   ├── comment.d.ts
│   │   │   ├── comment.js
│   │   │   ├── container.d.ts
│   │   │   ├── container.js
│   │   │   ├── css-syntax-error.d.ts
│   │   │   ├── css-syntax-error.js
│   │   │   ├── declaration.d.ts
│   │   │   ├── declaration.js
│   │   │   ├── document.d.ts
│   │   │   ├── document.js
│   │   │   ├── fromJSON.d.ts
│   │   │   ├── fromJSON.js
│   │   │   ├── input.d.ts
│   │   │   ├── input.js
│   │   │   ├── lazy-result.d.ts
│   │   │   ├── lazy-result.js
│   │   │   ├── list.d.ts
│   │   │   ├── list.js
│   │   │   ├── map-generator.js
│   │   │   ├── no-work-result.d.ts
│   │   │   ├── no-work-result.js
│   │   │   ├── node.d.ts
│   │   │   ├── node.js
│   │   │   ├── parse.d.ts
│   │   │   ├── parse.js
│   │   │   ├── parser.js
│   │   │   ├── postcss.d.mts
│   │   │   ├── postcss.d.ts
│   │   │   ├── postcss.js
│   │   │   ├── postcss.mjs
│   │   │   ├── previous-map.d.ts
│   │   │   ├── previous-map.js
│   │   │   ├── processor.d.ts
│   │   │   ├── processor.js
│   │   │   ├── result.d.ts
│   │   │   ├── result.js
│   │   │   ├── root.d.ts
│   │   │   ├── root.js
│   │   │   ├── rule.d.ts
│   │   │   ├── rule.js
│   │   │   ├── stringifier.d.ts
│   │   │   ├── stringifier.js
│   │   │   ├── stringify.d.ts
│   │   │   ├── stringify.js
│   │   │   ├── symbols.js
│   │   │   ├── terminal-highlight.js
│   │   │   ├── tokenize.js
│   │   │   ├── warn-once.js
│   │   │   ├── warning.d.ts
│   │   │   └── warning.js
│   │   └── package.json
│   ├── rollup
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── bin
│   │   │   │   └── rollup
│   │   │   ├── es
│   │   │   │   ├── getLogFilter.js
│   │   │   │   ├── package.json
│   │   │   │   ├── parseAst.js
│   │   │   │   ├── rollup.js
│   │   │   │   └── shared
│   │   │   │       ├── node-entry.js
│   │   │   │       ├── parseAst.js
│   │   │   │       └── watch.js
│   │   │   ├── getLogFilter.d.ts
│   │   │   ├── getLogFilter.js
│   │   │   ├── loadConfigFile.d.ts
│   │   │   ├── loadConfigFile.js
│   │   │   ├── native.js
│   │   │   ├── parseAst.d.ts
│   │   │   ├── parseAst.js
│   │   │   ├── rollup.d.ts
│   │   │   ├── rollup.js
│   │   │   └── shared
│   │   │       ├── fsevents-importer.js
│   │   │       ├── index.js
│   │   │       ├── loadConfigFile.js
│   │   │       ├── parseAst.js
│   │   │       ├── rollup.js
│   │   │       ├── watch-cli.js
│   │   │       └── watch.js
│   │   └── package.json
│   ├── ryu
│   │   ├── Walking.fbx
│   │   ├── license.txt
│   │   ├── scene.bin
│   │   ├── scene.gltf
│   │   └── textures
│   │       ├── EyeL.003_baseColor.png
│   │       ├── EyeR.003_baseColor.png
│   │       ├── alp_ryu_001.001_baseColor.png
│   │       ├── def_ryu_001.001_baseColor.png
│   │       └── skin_ryu_001.001_baseColor.png
│   ├── source-map-js
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── array-set.js
│   │   │   ├── base64-vlq.js
│   │   │   ├── base64.js
│   │   │   ├── binary-search.js
│   │   │   ├── mapping-list.js
│   │   │   ├── quick-sort.js
│   │   │   ├── source-map-consumer.js
│   │   │   ├── source-map-generator.js
│   │   │   ├── source-node.js
│   │   │   └── util.js
│   │   ├── package.json
│   │   ├── source-map.d.ts
│   │   └── source-map.js
│   ├── three
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── build
│   │   │   ├── three.cjs
│   │   │   ├── three.js
│   │   │   ├── three.min.js
│   │   │   ├── three.module.js
│   │   │   └── three.module.min.js
│   │   ├── examples
│   │   │   ├── fonts
│   │   │   │   ├── LICENSE
│   │   │   │   ├── README.md
│   │   │   │   ├── droid
│   │   │   │   │   ├── NOTICE
│   │   │   │   │   ├── README.txt
│   │   │   │   │   ├── droid_sans_bold.typeface.json
│   │   │   │   │   ├── droid_sans_mono_regular.typeface.json
│   │   │   │   │   ├── droid_sans_regular.typeface.json
│   │   │   │   │   ├── droid_serif_bold.typeface.json
│   │   │   │   │   └── droid_serif_regular.typeface.json
│   │   │   │   ├── gentilis_bold.typeface.json
│   │   │   │   ├── gentilis_regular.typeface.json
│   │   │   │   ├── helvetiker_bold.typeface.json
│   │   │   │   ├── helvetiker_regular.typeface.json
│   │   │   │   ├── optimer_bold.typeface.json
│   │   │   │   ├── optimer_regular.typeface.json
│   │   │   │   └── ttf
│   │   │   │       ├── README.md
│   │   │   │       └── kenpixel.ttf
│   │   │   └── jsm
│   │   │       ├── Addons.js
│   │   │       ├── animation
│   │   │       │   ├── AnimationClipCreator.js
│   │   │       │   ├── CCDIKSolver.js
│   │   │       │   ├── MMDAnimationHelper.js
│   │   │       │   └── MMDPhysics.js
│   │   │       ├── cameras
│   │   │       │   └── CinematicCamera.js
│   │   │       ├── capabilities
│   │   │       │   ├── WebGL.js
│   │   │       │   └── WebGPU.js
│   │   │       ├── controls
│   │   │       │   ├── ArcballControls.js
│   │   │       │   ├── DragControls.js
│   │   │       │   ├── FirstPersonControls.js
│   │   │       │   ├── FlyControls.js
│   │   │       │   ├── MapControls.js
│   │   │       │   ├── OrbitControls.js
│   │   │       │   ├── PointerLockControls.js
│   │   │       │   ├── TrackballControls.js
│   │   │       │   └── TransformControls.js
│   │   │       ├── csm
│   │   │       │   ├── CSM.js
│   │   │       │   ├── CSMFrustum.js
│   │   │       │   ├── CSMHelper.js
│   │   │       │   └── CSMShader.js
│   │   │       ├── curves
│   │   │       │   ├── CurveExtras.js
│   │   │       │   ├── NURBSCurve.js
│   │   │       │   ├── NURBSSurface.js
│   │   │       │   └── NURBSUtils.js
│   │   │       ├── effects
│   │   │       │   ├── AnaglyphEffect.js
│   │   │       │   ├── AsciiEffect.js
│   │   │       │   ├── OutlineEffect.js
│   │   │       │   ├── ParallaxBarrierEffect.js
│   │   │       │   ├── PeppersGhostEffect.js
│   │   │       │   └── StereoEffect.js
│   │   │       ├── environments
│   │   │       │   ├── DebugEnvironment.js
│   │   │       │   └── RoomEnvironment.js
│   │   │       ├── exporters
│   │   │       │   ├── DRACOExporter.js
│   │   │       │   ├── EXRExporter.js
│   │   │       │   ├── GLTFExporter.js
│   │   │       │   ├── KTX2Exporter.js
│   │   │       │   ├── MMDExporter.js
│   │   │       │   ├── OBJExporter.js
│   │   │       │   ├── PLYExporter.js
│   │   │       │   ├── STLExporter.js
│   │   │       │   └── USDZExporter.js
│   │   │       ├── geometries
│   │   │       │   ├── BoxLineGeometry.js
│   │   │       │   ├── ConvexGeometry.js
│   │   │       │   ├── DecalGeometry.js
│   │   │       │   ├── InstancedPointsGeometry.js
│   │   │       │   ├── ParametricGeometries.js
│   │   │       │   ├── ParametricGeometry.js
│   │   │       │   ├── RoundedBoxGeometry.js
│   │   │       │   ├── SDFGeometryGenerator.js
│   │   │       │   ├── TeapotGeometry.js
│   │   │       │   └── TextGeometry.js
│   │   │       ├── helpers
│   │   │       │   ├── LightProbeHelper.js
│   │   │       │   ├── OctreeHelper.js
│   │   │       │   ├── PositionalAudioHelper.js
│   │   │       │   ├── RectAreaLightHelper.js
│   │   │       │   ├── TextureHelper.js
│   │   │       │   ├── VertexNormalsHelper.js
│   │   │       │   ├── VertexTangentsHelper.js
│   │   │       │   └── ViewHelper.js
│   │   │       ├── interactive
│   │   │       │   ├── HTMLMesh.js
│   │   │       │   ├── InteractiveGroup.js
│   │   │       │   ├── SelectionBox.js
│   │   │       │   └── SelectionHelper.js
│   │   │       ├── libs
│   │   │       │   ├── ammo.wasm.js
│   │   │       │   ├── ammo.wasm.wasm
│   │   │       │   ├── basis
│   │   │       │   │   ├── README.md
│   │   │       │   │   ├── basis_transcoder.js
│   │   │       │   │   └── basis_transcoder.wasm
│   │   │       │   ├── chevrotain.module.min.js
│   │   │       │   ├── draco
│   │   │       │   │   ├── README.md
│   │   │       │   │   ├── draco_decoder.js
│   │   │       │   │   ├── draco_decoder.wasm
│   │   │       │   │   ├── draco_encoder.js
│   │   │       │   │   ├── draco_wasm_wrapper.js
│   │   │       │   │   └── gltf
│   │   │       │   │       ├── draco_decoder.js
│   │   │       │   │       ├── draco_decoder.wasm
│   │   │       │   │       ├── draco_encoder.js
│   │   │       │   │       └── draco_wasm_wrapper.js
│   │   │       │   ├── ecsy.module.js
│   │   │       │   ├── fflate.module.js
│   │   │       │   ├── ktx-parse.module.js
│   │   │       │   ├── lil-gui.module.min.js
│   │   │       │   ├── lottie_canvas.module.js
│   │   │       │   ├── meshopt_decoder.module.js
│   │   │       │   ├── mikktspace.module.js
│   │   │       │   ├── mmdparser.module.js
│   │   │       │   ├── motion-controllers.module.js
│   │   │       │   ├── opentype.module.js
│   │   │       │   ├── potpack.module.js
│   │   │       │   ├── rhino3dm
│   │   │       │   │   ├── rhino3dm.js
│   │   │       │   │   ├── rhino3dm.module.js
│   │   │       │   │   └── rhino3dm.wasm
│   │   │       │   ├── stats.module.js
│   │   │       │   ├── surfaceNet.js
│   │   │       │   ├── tween.module.js
│   │   │       │   ├── utif.module.js
│   │   │       │   └── zstddec.module.js
│   │   │       ├── lights
│   │   │       │   ├── IESSpotLight.js
│   │   │       │   ├── LightProbeGenerator.js
│   │   │       │   └── RectAreaLightUniformsLib.js
│   │   │       ├── lines
│   │   │       │   ├── Line2.js
│   │   │       │   ├── LineGeometry.js
│   │   │       │   ├── LineMaterial.js
│   │   │       │   ├── LineSegments2.js
│   │   │       │   ├── LineSegmentsGeometry.js
│   │   │       │   ├── Wireframe.js
│   │   │       │   └── WireframeGeometry2.js
│   │   │       ├── loaders
│   │   │       │   ├── 3DMLoader.js
│   │   │       │   ├── 3MFLoader.js
│   │   │       │   ├── AMFLoader.js
│   │   │       │   ├── BVHLoader.js
│   │   │       │   ├── ColladaLoader.js
│   │   │       │   ├── DDSLoader.js
│   │   │       │   ├── DRACOLoader.js
│   │   │       │   ├── EXRLoader.js
│   │   │       │   ├── FBXLoader.js
│   │   │       │   ├── FontLoader.js
│   │   │       │   ├── GCodeLoader.js
│   │   │       │   ├── GLTFLoader.js
│   │   │       │   ├── HDRCubeTextureLoader.js
│   │   │       │   ├── IESLoader.js
│   │   │       │   ├── KMZLoader.js
│   │   │       │   ├── KTX2Loader.js
│   │   │       │   ├── KTXLoader.js
│   │   │       │   ├── LDrawLoader.js
│   │   │       │   ├── LUT3dlLoader.js
│   │   │       │   ├── LUTCubeLoader.js
│   │   │       │   ├── LUTImageLoader.js
│   │   │       │   ├── LWOLoader.js
│   │   │       │   ├── LogLuvLoader.js
│   │   │       │   ├── LottieLoader.js
│   │   │       │   ├── MD2Loader.js
│   │   │       │   ├── MDDLoader.js
│   │   │       │   ├── MMDLoader.js
│   │   │       │   ├── MTLLoader.js
│   │   │       │   ├── MaterialXLoader.js
│   │   │       │   ├── NRRDLoader.js
│   │   │       │   ├── OBJLoader.js
│   │   │       │   ├── PCDLoader.js
│   │   │       │   ├── PDBLoader.js
│   │   │       │   ├── PLYLoader.js
│   │   │       │   ├── PVRLoader.js
│   │   │       │   ├── RGBELoader.js
│   │   │       │   ├── RGBMLoader.js
│   │   │       │   ├── STLLoader.js
│   │   │       │   ├── SVGLoader.js
│   │   │       │   ├── TDSLoader.js
│   │   │       │   ├── TGALoader.js
│   │   │       │   ├── TIFFLoader.js
│   │   │       │   ├── TTFLoader.js
│   │   │       │   ├── TiltLoader.js
│   │   │       │   ├── USDZLoader.js
│   │   │       │   ├── VOXLoader.js
│   │   │       │   ├── VRMLLoader.js
│   │   │       │   ├── VTKLoader.js
│   │   │       │   ├── XYZLoader.js
│   │   │       │   └── lwo
│   │   │       │       ├── IFFParser.js
│   │   │       │       ├── LWO2Parser.js
│   │   │       │       └── LWO3Parser.js
│   │   │       ├── materials
│   │   │       │   └── MeshGouraudMaterial.js
│   │   │       ├── math
│   │   │       │   ├── Capsule.js
│   │   │       │   ├── ColorConverter.js
│   │   │       │   ├── ConvexHull.js
│   │   │       │   ├── ImprovedNoise.js
│   │   │       │   ├── Lut.js
│   │   │       │   ├── MeshSurfaceSampler.js
│   │   │       │   ├── OBB.js
│   │   │       │   ├── Octree.js
│   │   │       │   └── SimplexNoise.js
│   │   │       ├── misc
│   │   │       │   ├── ConvexObjectBreaker.js
│   │   │       │   ├── GPUComputationRenderer.js
│   │   │       │   ├── Gyroscope.js
│   │   │       │   ├── MD2Character.js
│   │   │       │   ├── MD2CharacterComplex.js
│   │   │       │   ├── MorphAnimMesh.js
│   │   │       │   ├── MorphBlendMesh.js
│   │   │       │   ├── ProgressiveLightMap.js
│   │   │       │   ├── RollerCoaster.js
│   │   │       │   ├── TubePainter.js
│   │   │       │   ├── Volume.js
│   │   │       │   └── VolumeSlice.js
│   │   │       ├── modifiers
│   │   │       │   ├── CurveModifier.js
│   │   │       │   ├── EdgeSplitModifier.js
│   │   │       │   ├── SimplifyModifier.js
│   │   │       │   └── TessellateModifier.js
│   │   │       ├── nodes
│   │   │       │   ├── Nodes.js
│   │   │       │   ├── accessors
│   │   │       │   │   ├── BitangentNode.js
│   │   │       │   │   ├── BufferAttributeNode.js
│   │   │       │   │   ├── BufferNode.js
│   │   │       │   │   ├── CameraNode.js
│   │   │       │   │   ├── CubeTextureNode.js
│   │   │       │   │   ├── InstanceNode.js
│   │   │       │   │   ├── InstancedPointsMaterialNode.js
│   │   │       │   │   ├── MaterialNode.js
│   │   │       │   │   ├── MaterialReferenceNode.js
│   │   │       │   │   ├── ModelNode.js
│   │   │       │   │   ├── ModelViewProjectionNode.js
│   │   │       │   │   ├── MorphNode.js
│   │   │       │   │   ├── NormalNode.js
│   │   │       │   │   ├── Object3DNode.js
│   │   │       │   │   ├── PointUVNode.js
│   │   │       │   │   ├── PositionNode.js
│   │   │       │   │   ├── ReferenceNode.js
│   │   │       │   │   ├── ReflectVectorNode.js
│   │   │       │   │   ├── SceneNode.js
│   │   │       │   │   ├── SkinningNode.js
│   │   │       │   │   ├── StorageBufferNode.js
│   │   │       │   │   ├── TangentNode.js
│   │   │       │   │   ├── TextureBicubicNode.js
│   │   │       │   │   ├── TextureNode.js
│   │   │       │   │   ├── TextureSizeNode.js
│   │   │       │   │   ├── TextureStoreNode.js
│   │   │       │   │   ├── UVNode.js
│   │   │       │   │   └── UserDataNode.js
│   │   │       │   ├── code
│   │   │       │   │   ├── CodeNode.js
│   │   │       │   │   ├── ExpressionNode.js
│   │   │       │   │   ├── FunctionCallNode.js
│   │   │       │   │   ├── FunctionNode.js
│   │   │       │   │   ├── ScriptableNode.js
│   │   │       │   │   └── ScriptableValueNode.js
│   │   │       │   ├── core
│   │   │       │   │   ├── ArrayUniformNode.js
│   │   │       │   │   ├── AssignNode.js
│   │   │       │   │   ├── AttributeNode.js
│   │   │       │   │   ├── BypassNode.js
│   │   │       │   │   ├── CacheNode.js
│   │   │       │   │   ├── ConstNode.js
│   │   │       │   │   ├── ContextNode.js
│   │   │       │   │   ├── IndexNode.js
│   │   │       │   │   ├── InputNode.js
│   │   │       │   │   ├── LightingModel.js
│   │   │       │   │   ├── Node.js
│   │   │       │   │   ├── NodeAttribute.js
│   │   │       │   │   ├── NodeBuilder.js
│   │   │       │   │   ├── NodeCache.js
│   │   │       │   │   ├── NodeCode.js
│   │   │       │   │   ├── NodeFrame.js
│   │   │       │   │   ├── NodeFunction.js
│   │   │       │   │   ├── NodeFunctionInput.js
│   │   │       │   │   ├── NodeKeywords.js
│   │   │       │   │   ├── NodeParser.js
│   │   │       │   │   ├── NodeUniform.js
│   │   │       │   │   ├── NodeUtils.js
│   │   │       │   │   ├── NodeVar.js
│   │   │       │   │   ├── NodeVarying.js
│   │   │       │   │   ├── OutputStructNode.js
│   │   │       │   │   ├── ParameterNode.js
│   │   │       │   │   ├── PropertyNode.js
│   │   │       │   │   ├── StackNode.js
│   │   │       │   │   ├── StructTypeNode.js
│   │   │       │   │   ├── TempNode.js
│   │   │       │   │   ├── UniformGroup.js
│   │   │       │   │   ├── UniformGroupNode.js
│   │   │       │   │   ├── UniformNode.js
│   │   │       │   │   ├── VarNode.js
│   │   │       │   │   ├── VaryingNode.js
│   │   │       │   │   └── constants.js
│   │   │       │   ├── display
│   │   │       │   │   ├── BlendModeNode.js
│   │   │       │   │   ├── BumpMapNode.js
│   │   │       │   │   ├── ColorAdjustmentNode.js
│   │   │       │   │   ├── ColorSpaceNode.js
│   │   │       │   │   ├── FrontFacingNode.js
│   │   │       │   │   ├── NormalMapNode.js
│   │   │       │   │   ├── PosterizeNode.js
│   │   │       │   │   ├── ToneMappingNode.js
│   │   │       │   │   ├── ViewportDepthNode.js
│   │   │       │   │   ├── ViewportDepthTextureNode.js
│   │   │       │   │   ├── ViewportNode.js
│   │   │       │   │   ├── ViewportSharedTextureNode.js
│   │   │       │   │   └── ViewportTextureNode.js
│   │   │       │   ├── fog
│   │   │       │   │   ├── FogExp2Node.js
│   │   │       │   │   ├── FogNode.js
│   │   │       │   │   └── FogRangeNode.js
│   │   │       │   ├── functions
│   │   │       │   │   ├── BSDF
│   │   │       │   │   │   ├── BRDF_GGX.js
│   │   │       │   │   │   ├── BRDF_Lambert.js
│   │   │       │   │   │   ├── BRDF_Sheen.js
│   │   │       │   │   │   ├── DFGApprox.js
│   │   │       │   │   │   ├── D_GGX.js
│   │   │       │   │   │   ├── EnvironmentBRDF.js
│   │   │       │   │   │   ├── F_Schlick.js
│   │   │       │   │   │   ├── Schlick_to_F0.js
│   │   │       │   │   │   └── V_GGX_SmithCorrelated.js
│   │   │       │   │   ├── PhongLightingModel.js
│   │   │       │   │   ├── PhysicalLightingModel.js
│   │   │       │   │   └── material
│   │   │       │   │       ├── getGeometryRoughness.js
│   │   │       │   │       └── getRoughness.js
│   │   │       │   ├── geometry
│   │   │       │   │   └── RangeNode.js
│   │   │       │   ├── gpgpu
│   │   │       │   │   └── ComputeNode.js
│   │   │       │   ├── lighting
│   │   │       │   │   ├── AONode.js
│   │   │       │   │   ├── AmbientLightNode.js
│   │   │       │   │   ├── AnalyticLightNode.js
│   │   │       │   │   ├── DirectionalLightNode.js
│   │   │       │   │   ├── EnvironmentNode.js
│   │   │       │   │   ├── HemisphereLightNode.js
│   │   │       │   │   ├── IESSpotLightNode.js
│   │   │       │   │   ├── LightNode.js
│   │   │       │   │   ├── LightUtils.js
│   │   │       │   │   ├── LightingContextNode.js
│   │   │       │   │   ├── LightingNode.js
│   │   │       │   │   ├── LightsNode.js
│   │   │       │   │   ├── PointLightNode.js
│   │   │       │   │   └── SpotLightNode.js
│   │   │       │   ├── loaders
│   │   │       │   │   ├── NodeLoader.js
│   │   │       │   │   ├── NodeMaterialLoader.js
│   │   │       │   │   └── NodeObjectLoader.js
│   │   │       │   ├── materials
│   │   │       │   │   ├── InstancedPointsNodeMaterial.js
│   │   │       │   │   ├── Line2NodeMaterial.js
│   │   │       │   │   ├── LineBasicNodeMaterial.js
│   │   │       │   │   ├── LineDashedNodeMaterial.js
│   │   │       │   │   ├── Materials.js
│   │   │       │   │   ├── MeshBasicNodeMaterial.js
│   │   │       │   │   ├── MeshLambertNodeMaterial.js
│   │   │       │   │   ├── MeshNormalNodeMaterial.js
│   │   │       │   │   ├── MeshPhongNodeMaterial.js
│   │   │       │   │   ├── MeshPhysicalNodeMaterial.js
│   │   │       │   │   ├── MeshStandardNodeMaterial.js
│   │   │       │   │   ├── NodeMaterial.js
│   │   │       │   │   ├── PointsNodeMaterial.js
│   │   │       │   │   └── SpriteNodeMaterial.js
│   │   │       │   ├── materialx
│   │   │       │   │   ├── DISCLAIMER.md
│   │   │       │   │   ├── MaterialXNodes.js
│   │   │       │   │   └── lib
│   │   │       │   │       ├── mx_hsv.js
│   │   │       │   │       ├── mx_noise.js
│   │   │       │   │       └── mx_transform_color.js
│   │   │       │   ├── math
│   │   │       │   │   ├── CondNode.js
│   │   │       │   │   ├── HashNode.js
│   │   │       │   │   ├── MathNode.js
│   │   │       │   │   └── OperatorNode.js
│   │   │       │   ├── parsers
│   │   │       │   │   ├── GLSLNodeFunction.js
│   │   │       │   │   └── GLSLNodeParser.js
│   │   │       │   ├── procedural
│   │   │       │   │   └── CheckerNode.js
│   │   │       │   ├── shadernode
│   │   │       │   │   └── ShaderNode.js
│   │   │       │   └── utils
│   │   │       │       ├── ArrayElementNode.js
│   │   │       │       ├── ConvertNode.js
│   │   │       │       ├── DiscardNode.js
│   │   │       │       ├── EquirectUVNode.js
│   │   │       │       ├── JoinNode.js
│   │   │       │       ├── LoopNode.js
│   │   │       │       ├── MatcapUVNode.js
│   │   │       │       ├── MaxMipLevelNode.js
│   │   │       │       ├── OscNode.js
│   │   │       │       ├── PackingNode.js
│   │   │       │       ├── RemapNode.js
│   │   │       │       ├── RotateUVNode.js
│   │   │       │       ├── SetNode.js
│   │   │       │       ├── SpecularMIPLevelNode.js
│   │   │       │       ├── SplitNode.js
│   │   │       │       ├── SpriteSheetUVNode.js
│   │   │       │       ├── TimerNode.js
│   │   │       │       └── TriplanarTexturesNode.js
│   │   │       ├── objects
│   │   │       │   ├── GroundProjectedSkybox.js
│   │   │       │   ├── InstancedPoints.js
│   │   │       │   ├── Lensflare.js
│   │   │       │   ├── MarchingCubes.js
│   │   │       │   ├── Reflector.js
│   │   │       │   ├── ReflectorForSSRPass.js
│   │   │       │   ├── Refractor.js
│   │   │       │   ├── ShadowMesh.js
│   │   │       │   ├── Sky.js
│   │   │       │   ├── Water.js
│   │   │       │   └── Water2.js
│   │   │       ├── offscreen
│   │   │       │   ├── jank.js
│   │   │       │   ├── offscreen.js
│   │   │       │   └── scene.js
│   │   │       ├── physics
│   │   │       │   ├── AmmoPhysics.js
│   │   │       │   └── RapierPhysics.js
│   │   │       ├── postprocessing
│   │   │       │   ├── AfterimagePass.js
│   │   │       │   ├── BloomPass.js
│   │   │       │   ├── BokehPass.js
│   │   │       │   ├── ClearPass.js
│   │   │       │   ├── CubeTexturePass.js
│   │   │       │   ├── DotScreenPass.js
│   │   │       │   ├── EffectComposer.js
│   │   │       │   ├── FilmPass.js
│   │   │       │   ├── GlitchPass.js
│   │   │       │   ├── HBAOPass.js
│   │   │       │   ├── HalftonePass.js
│   │   │       │   ├── LUTPass.js
│   │   │       │   ├── MaskPass.js
│   │   │       │   ├── OutlinePass.js
│   │   │       │   ├── OutputPass.js
│   │   │       │   ├── Pass.js
│   │   │       │   ├── RenderPass.js
│   │   │       │   ├── RenderPixelatedPass.js
│   │   │       │   ├── SAOPass.js
│   │   │       │   ├── SMAAPass.js
│   │   │       │   ├── SSAARenderPass.js
│   │   │       │   ├── SSAOPass.js
│   │   │       │   ├── SSRPass.js
│   │   │       │   ├── SavePass.js
│   │   │       │   ├── ShaderPass.js
│   │   │       │   ├── TAARenderPass.js
│   │   │       │   ├── TexturePass.js
│   │   │       │   └── UnrealBloomPass.js
│   │   │       ├── renderers
│   │   │       │   ├── CSS2DRenderer.js
│   │   │       │   ├── CSS3DRenderer.js
│   │   │       │   ├── Projector.js
│   │   │       │   ├── SVGRenderer.js
│   │   │       │   ├── common
│   │   │       │   │   ├── Animation.js
│   │   │       │   │   ├── Attributes.js
│   │   │       │   │   ├── Backend.js
│   │   │       │   │   ├── Background.js
│   │   │       │   │   ├── Binding.js
│   │   │       │   │   ├── Bindings.js
│   │   │       │   │   ├── Buffer.js
│   │   │       │   │   ├── BufferUtils.js
│   │   │       │   │   ├── ChainMap.js
│   │   │       │   │   ├── Color4.js
│   │   │       │   │   ├── ComputePipeline.js
│   │   │       │   │   ├── Constants.js
│   │   │       │   │   ├── CubeRenderTarget.js
│   │   │       │   │   ├── DataMap.js
│   │   │       │   │   ├── Geometries.js
│   │   │       │   │   ├── Info.js
│   │   │       │   │   ├── Pipeline.js
│   │   │       │   │   ├── Pipelines.js
│   │   │       │   │   ├── ProgrammableStage.js
│   │   │       │   │   ├── RenderContext.js
│   │   │       │   │   ├── RenderContexts.js
│   │   │       │   │   ├── RenderList.js
│   │   │       │   │   ├── RenderLists.js
│   │   │       │   │   ├── RenderObject.js
│   │   │       │   │   ├── RenderObjects.js
│   │   │       │   │   ├── RenderPipeline.js
│   │   │       │   │   ├── Renderer.js
│   │   │       │   │   ├── SampledTexture.js
│   │   │       │   │   ├── Sampler.js
│   │   │       │   │   ├── StorageBuffer.js
│   │   │       │   │   ├── StorageTexture.js
│   │   │       │   │   ├── Textures.js
│   │   │       │   │   ├── Uniform.js
│   │   │       │   │   ├── UniformBuffer.js
│   │   │       │   │   ├── UniformsGroup.js
│   │   │       │   │   └── nodes
│   │   │       │   │       ├── NodeBuilderState.js
│   │   │       │   │       ├── NodeSampledTexture.js
│   │   │       │   │       ├── NodeSampler.js
│   │   │       │   │       ├── NodeUniform.js
│   │   │       │   │       ├── NodeUniformsGroup.js
│   │   │       │   │       └── Nodes.js
│   │   │       │   ├── webgl
│   │   │       │   │   ├── WebGLBackend.js
│   │   │       │   │   ├── nodes
│   │   │       │   │   │   └── GLSLNodeBuilder.js
│   │   │       │   │   └── utils
│   │   │       │   │       ├── WebGLAttributeUtils.js
│   │   │       │   │       ├── WebGLExtensions.js
│   │   │       │   │       ├── WebGLState.js
│   │   │       │   │       ├── WebGLTextureUtils.js
│   │   │       │   │       └── WebGLUtils.js
│   │   │       │   ├── webgl-legacy
│   │   │       │   │   └── nodes
│   │   │       │   │       ├── GLSL1NodeBuilder.js
│   │   │       │   │       ├── SlotNode.js
│   │   │       │   │       ├── WebGLNodeBuilder.js
│   │   │       │   │       └── WebGLNodes.js
│   │   │       │   └── webgpu
│   │   │       │       ├── WebGPUBackend.js
│   │   │       │       ├── WebGPURenderer.js
│   │   │       │       ├── nodes
│   │   │       │       │   ├── WGSLNodeBuilder.js
│   │   │       │       │   ├── WGSLNodeFunction.js
│   │   │       │       │   └── WGSLNodeParser.js
│   │   │       │       └── utils
│   │   │       │           ├── WebGPUAttributeUtils.js
│   │   │       │           ├── WebGPUBindingUtils.js
│   │   │       │           ├── WebGPUConstants.js
│   │   │       │           ├── WebGPUPipelineUtils.js
│   │   │       │           ├── WebGPUTexturePassUtils.js
│   │   │       │           ├── WebGPUTextureUtils.js
│   │   │       │           └── WebGPUUtils.js
│   │   │       ├── shaders
│   │   │       │   ├── ACESFilmicToneMappingShader.js
│   │   │       │   ├── AfterimageShader.js
│   │   │       │   ├── BasicShader.js
│   │   │       │   ├── BleachBypassShader.js
│   │   │       │   ├── BlendShader.js
│   │   │       │   ├── BokehShader.js
│   │   │       │   ├── BokehShader2.js
│   │   │       │   ├── BrightnessContrastShader.js
│   │   │       │   ├── ColorCorrectionShader.js
│   │   │       │   ├── ColorifyShader.js
│   │   │       │   ├── ConvolutionShader.js
│   │   │       │   ├── CopyShader.js
│   │   │       │   ├── DOFMipMapShader.js
│   │   │       │   ├── DepthLimitedBlurShader.js
│   │   │       │   ├── DigitalGlitch.js
│   │   │       │   ├── DotScreenShader.js
│   │   │       │   ├── ExposureShader.js
│   │   │       │   ├── FXAAShader.js
│   │   │       │   ├── FilmShader.js
│   │   │       │   ├── FocusShader.js
│   │   │       │   ├── FreiChenShader.js
│   │   │       │   ├── GammaCorrectionShader.js
│   │   │       │   ├── GodRaysShader.js
│   │   │       │   ├── HBAOShader.js
│   │   │       │   ├── HalftoneShader.js
│   │   │       │   ├── HorizontalBlurShader.js
│   │   │       │   ├── HorizontalTiltShiftShader.js
│   │   │       │   ├── HueSaturationShader.js
│   │   │       │   ├── KaleidoShader.js
│   │   │       │   ├── LuminosityHighPassShader.js
│   │   │       │   ├── LuminosityShader.js
│   │   │       │   ├── MMDToonShader.js
│   │   │       │   ├── MirrorShader.js
│   │   │       │   ├── NormalMapShader.js
│   │   │       │   ├── OutputShader.js
│   │   │       │   ├── PoissonDenoiseShader.js
│   │   │       │   ├── RGBShiftShader.js
│   │   │       │   ├── SAOShader.js
│   │   │       │   ├── SMAAShader.js
│   │   │       │   ├── SSAOShader.js
│   │   │       │   ├── SSRShader.js
│   │   │       │   ├── SepiaShader.js
│   │   │       │   ├── SobelOperatorShader.js
│   │   │       │   ├── SubsurfaceScatteringShader.js
│   │   │       │   ├── TechnicolorShader.js
│   │   │       │   ├── ToonShader.js
│   │   │       │   ├── TriangleBlurShader.js
│   │   │       │   ├── UnpackDepthRGBAShader.js
│   │   │       │   ├── VelocityShader.js
│   │   │       │   ├── VerticalBlurShader.js
│   │   │       │   ├── VerticalTiltShiftShader.js
│   │   │       │   ├── VignetteShader.js
│   │   │       │   ├── VolumeShader.js
│   │   │       │   └── WaterRefractionShader.js
│   │   │       ├── textures
│   │   │       │   └── FlakesTexture.js
│   │   │       ├── transpiler
│   │   │       │   ├── AST.js
│   │   │       │   ├── GLSLDecoder.js
│   │   │       │   ├── ShaderToyDecoder.js
│   │   │       │   ├── TSLEncoder.js
│   │   │       │   └── Transpiler.js
│   │   │       ├── utils
│   │   │       │   ├── BufferGeometryUtils.js
│   │   │       │   ├── CameraUtils.js
│   │   │       │   ├── GPUStatsPanel.js
│   │   │       │   ├── GeometryCompressionUtils.js
│   │   │       │   ├── GeometryUtils.js
│   │   │       │   ├── LDrawUtils.js
│   │   │       │   ├── PackedPhongMaterial.js
│   │   │       │   ├── SceneUtils.js
│   │   │       │   ├── ShadowMapViewer.js
│   │   │       │   ├── SkeletonUtils.js
│   │   │       │   ├── SortUtils.js
│   │   │       │   ├── TextureUtils.js
│   │   │       │   ├── UVsDebug.js
│   │   │       │   └── WorkerPool.js
│   │   │       └── webxr
│   │   │           ├── ARButton.js
│   │   │           ├── OculusHandModel.js
│   │   │           ├── OculusHandPointerModel.js
│   │   │           ├── Text2D.js
│   │   │           ├── VRButton.js
│   │   │           ├── XRButton.js
│   │   │           ├── XRControllerModelFactory.js
│   │   │           ├── XREstimatedLight.js
│   │   │           ├── XRHandMeshModel.js
│   │   │           ├── XRHandModelFactory.js
│   │   │           ├── XRHandPrimitiveModel.js
│   │   │           └── XRPlanes.js
│   │   ├── package.json
│   │   └── src
│   │       ├── Three.Legacy.js
│   │       ├── Three.js
│   │       ├── animation
│   │       │   ├── AnimationAction.js
│   │       │   ├── AnimationClip.js
│   │       │   ├── AnimationMixer.js
│   │       │   ├── AnimationObjectGroup.js
│   │       │   ├── AnimationUtils.js
│   │       │   ├── KeyframeTrack.js
│   │       │   ├── PropertyBinding.js
│   │       │   ├── PropertyMixer.js
│   │       │   └── tracks
│   │       │       ├── BooleanKeyframeTrack.js
│   │       │       ├── ColorKeyframeTrack.js
│   │       │       ├── NumberKeyframeTrack.js
│   │       │       ├── QuaternionKeyframeTrack.js
│   │       │       ├── StringKeyframeTrack.js
│   │       │       └── VectorKeyframeTrack.js
│   │       ├── audio
│   │       │   ├── Audio.js
│   │       │   ├── AudioAnalyser.js
│   │       │   ├── AudioContext.js
│   │       │   ├── AudioListener.js
│   │       │   └── PositionalAudio.js
│   │       ├── cameras
│   │       │   ├── ArrayCamera.js
│   │       │   ├── Camera.js
│   │       │   ├── CubeCamera.js
│   │       │   ├── OrthographicCamera.js
│   │       │   ├── PerspectiveCamera.js
│   │       │   └── StereoCamera.js
│   │       ├── constants.js
│   │       ├── core
│   │       │   ├── BufferAttribute.js
│   │       │   ├── BufferGeometry.js
│   │       │   ├── Clock.js
│   │       │   ├── EventDispatcher.js
│   │       │   ├── GLBufferAttribute.js
│   │       │   ├── InstancedBufferAttribute.js
│   │       │   ├── InstancedBufferGeometry.js
│   │       │   ├── InstancedInterleavedBuffer.js
│   │       │   ├── InterleavedBuffer.js
│   │       │   ├── InterleavedBufferAttribute.js
│   │       │   ├── Layers.js
│   │       │   ├── Object3D.js
│   │       │   ├── Raycaster.js
│   │       │   ├── RenderTarget.js
│   │       │   ├── Uniform.js
│   │       │   └── UniformsGroup.js
│   │       ├── extras
│   │       │   ├── DataUtils.js
│   │       │   ├── Earcut.js
│   │       │   ├── ImageUtils.js
│   │       │   ├── PMREMGenerator.js
│   │       │   ├── ShapeUtils.js
│   │       │   ├── core
│   │       │   │   ├── Curve.js
│   │       │   │   ├── CurvePath.js
│   │       │   │   ├── Interpolations.js
│   │       │   │   ├── Path.js
│   │       │   │   ├── Shape.js
│   │       │   │   └── ShapePath.js
│   │       │   └── curves
│   │       │       ├── ArcCurve.js
│   │       │       ├── CatmullRomCurve3.js
│   │       │       ├── CubicBezierCurve.js
│   │       │       ├── CubicBezierCurve3.js
│   │       │       ├── Curves.js
│   │       │       ├── EllipseCurve.js
│   │       │       ├── LineCurve.js
│   │       │       ├── LineCurve3.js
│   │       │       ├── QuadraticBezierCurve.js
│   │       │       ├── QuadraticBezierCurve3.js
│   │       │       └── SplineCurve.js
│   │       ├── geometries
│   │       │   ├── BoxGeometry.js
│   │       │   ├── CapsuleGeometry.js
│   │       │   ├── CircleGeometry.js
│   │       │   ├── ConeGeometry.js
│   │       │   ├── CylinderGeometry.js
│   │       │   ├── DodecahedronGeometry.js
│   │       │   ├── EdgesGeometry.js
│   │       │   ├── ExtrudeGeometry.js
│   │       │   ├── Geometries.js
│   │       │   ├── IcosahedronGeometry.js
│   │       │   ├── LatheGeometry.js
│   │       │   ├── OctahedronGeometry.js
│   │       │   ├── PlaneGeometry.js
│   │       │   ├── PolyhedronGeometry.js
│   │       │   ├── RingGeometry.js
│   │       │   ├── ShapeGeometry.js
│   │       │   ├── SphereGeometry.js
│   │       │   ├── TetrahedronGeometry.js
│   │       │   ├── TorusGeometry.js
│   │       │   ├── TorusKnotGeometry.js
│   │       │   ├── TubeGeometry.js
│   │       │   └── WireframeGeometry.js
│   │       ├── helpers
│   │       │   ├── ArrowHelper.js
│   │       │   ├── AxesHelper.js
│   │       │   ├── Box3Helper.js
│   │       │   ├── BoxHelper.js
│   │       │   ├── CameraHelper.js
│   │       │   ├── DirectionalLightHelper.js
│   │       │   ├── GridHelper.js
│   │       │   ├── HemisphereLightHelper.js
│   │       │   ├── PlaneHelper.js
│   │       │   ├── PointLightHelper.js
│   │       │   ├── PolarGridHelper.js
│   │       │   ├── SkeletonHelper.js
│   │       │   └── SpotLightHelper.js
│   │       ├── lights
│   │       │   ├── AmbientLight.js
│   │       │   ├── DirectionalLight.js
│   │       │   ├── DirectionalLightShadow.js
│   │       │   ├── HemisphereLight.js
│   │       │   ├── Light.js
│   │       │   ├── LightProbe.js
│   │       │   ├── LightShadow.js
│   │       │   ├── PointLight.js
│   │       │   ├── PointLightShadow.js
│   │       │   ├── RectAreaLight.js
│   │       │   ├── SpotLight.js
│   │       │   └── SpotLightShadow.js
│   │       ├── loaders
│   │       │   ├── AnimationLoader.js
│   │       │   ├── AudioLoader.js
│   │       │   ├── BufferGeometryLoader.js
│   │       │   ├── Cache.js
│   │       │   ├── CompressedTextureLoader.js
│   │       │   ├── CubeTextureLoader.js
│   │       │   ├── DataTextureLoader.js
│   │       │   ├── FileLoader.js
│   │       │   ├── ImageBitmapLoader.js
│   │       │   ├── ImageLoader.js
│   │       │   ├── Loader.js
│   │       │   ├── LoaderUtils.js
│   │       │   ├── LoadingManager.js
│   │       │   ├── MaterialLoader.js
│   │       │   ├── ObjectLoader.js
│   │       │   └── TextureLoader.js
│   │       ├── materials
│   │       │   ├── LineBasicMaterial.js
│   │       │   ├── LineDashedMaterial.js
│   │       │   ├── Material.js
│   │       │   ├── Materials.js
│   │       │   ├── MeshBasicMaterial.js
│   │       │   ├── MeshDepthMaterial.js
│   │       │   ├── MeshDistanceMaterial.js
│   │       │   ├── MeshLambertMaterial.js
│   │       │   ├── MeshMatcapMaterial.js
│   │       │   ├── MeshNormalMaterial.js
│   │       │   ├── MeshPhongMaterial.js
│   │       │   ├── MeshPhysicalMaterial.js
│   │       │   ├── MeshStandardMaterial.js
│   │       │   ├── MeshToonMaterial.js
│   │       │   ├── PointsMaterial.js
│   │       │   ├── RawShaderMaterial.js
│   │       │   ├── ShaderMaterial.js
│   │       │   ├── ShadowMaterial.js
│   │       │   └── SpriteMaterial.js
│   │       ├── math
│   │       │   ├── Box2.js
│   │       │   ├── Box3.js
│   │       │   ├── Color.js
│   │       │   ├── ColorManagement.js
│   │       │   ├── Cylindrical.js
│   │       │   ├── Euler.js
│   │       │   ├── Frustum.js
│   │       │   ├── Interpolant.js
│   │       │   ├── Line3.js
│   │       │   ├── MathUtils.js
│   │       │   ├── Matrix3.js
│   │       │   ├── Matrix4.js
│   │       │   ├── Plane.js
│   │       │   ├── Quaternion.js
│   │       │   ├── Ray.js
│   │       │   ├── Sphere.js
│   │       │   ├── Spherical.js
│   │       │   ├── SphericalHarmonics3.js
│   │       │   ├── Triangle.js
│   │       │   ├── Vector2.js
│   │       │   ├── Vector3.js
│   │       │   ├── Vector4.js
│   │       │   └── interpolants
│   │       │       ├── CubicInterpolant.js
│   │       │       ├── DiscreteInterpolant.js
│   │       │       ├── LinearInterpolant.js
│   │       │       └── QuaternionLinearInterpolant.js
│   │       ├── objects
│   │       │   ├── BatchedMesh.js
│   │       │   ├── Bone.js
│   │       │   ├── Group.js
│   │       │   ├── InstancedMesh.js
│   │       │   ├── LOD.js
│   │       │   ├── Line.js
│   │       │   ├── LineLoop.js
│   │       │   ├── LineSegments.js
│   │       │   ├── Mesh.js
│   │       │   ├── Points.js
│   │       │   ├── Skeleton.js
│   │       │   ├── SkinnedMesh.js
│   │       │   └── Sprite.js
│   │       ├── renderers
│   │       │   ├── WebGL1Renderer.js
│   │       │   ├── WebGL3DRenderTarget.js
│   │       │   ├── WebGLArrayRenderTarget.js
│   │       │   ├── WebGLCubeRenderTarget.js
│   │       │   ├── WebGLMultipleRenderTargets.js
│   │       │   ├── WebGLRenderTarget.js
│   │       │   ├── WebGLRenderer.js
│   │       │   ├── shaders
│   │       │   │   ├── ShaderChunk
│   │       │   │   │   ├── alphahash_fragment.glsl.js
│   │       │   │   │   ├── alphahash_pars_fragment.glsl.js
│   │       │   │   │   ├── alphamap_fragment.glsl.js
│   │       │   │   │   ├── alphamap_pars_fragment.glsl.js
│   │       │   │   │   ├── alphatest_fragment.glsl.js
│   │       │   │   │   ├── alphatest_pars_fragment.glsl.js
│   │       │   │   │   ├── aomap_fragment.glsl.js
│   │       │   │   │   ├── aomap_pars_fragment.glsl.js
│   │       │   │   │   ├── batching_pars_vertex.glsl.js
│   │       │   │   │   ├── batching_vertex.glsl.js
│   │       │   │   │   ├── begin_vertex.glsl.js
│   │       │   │   │   ├── beginnormal_vertex.glsl.js
│   │       │   │   │   ├── bsdfs.glsl.js
│   │       │   │   │   ├── bumpmap_pars_fragment.glsl.js
│   │       │   │   │   ├── clearcoat_normal_fragment_begin.glsl.js
│   │       │   │   │   ├── clearcoat_normal_fragment_maps.glsl.js
│   │       │   │   │   ├── clearcoat_pars_fragment.glsl.js
│   │       │   │   │   ├── clipping_planes_fragment.glsl.js
│   │       │   │   │   ├── clipping_planes_pars_fragment.glsl.js
│   │       │   │   │   ├── clipping_planes_pars_vertex.glsl.js
│   │       │   │   │   ├── clipping_planes_vertex.glsl.js
│   │       │   │   │   ├── color_fragment.glsl.js
│   │       │   │   │   ├── color_pars_fragment.glsl.js
│   │       │   │   │   ├── color_pars_vertex.glsl.js
│   │       │   │   │   ├── color_vertex.glsl.js
│   │       │   │   │   ├── colorspace_fragment.glsl.js
│   │       │   │   │   ├── colorspace_pars_fragment.glsl.js
│   │       │   │   │   ├── common.glsl.js
│   │       │   │   │   ├── cube_uv_reflection_fragment.glsl.js
│   │       │   │   │   ├── default_fragment.glsl.js
│   │       │   │   │   ├── default_vertex.glsl.js
│   │       │   │   │   ├── defaultnormal_vertex.glsl.js
│   │       │   │   │   ├── displacementmap_pars_vertex.glsl.js
│   │       │   │   │   ├── displacementmap_vertex.glsl.js
│   │       │   │   │   ├── dithering_fragment.glsl.js
│   │       │   │   │   ├── dithering_pars_fragment.glsl.js
│   │       │   │   │   ├── emissivemap_fragment.glsl.js
│   │       │   │   │   ├── emissivemap_pars_fragment.glsl.js
│   │       │   │   │   ├── envmap_common_pars_fragment.glsl.js
│   │       │   │   │   ├── envmap_fragment.glsl.js
│   │       │   │   │   ├── envmap_pars_fragment.glsl.js
│   │       │   │   │   ├── envmap_pars_vertex.glsl.js
│   │       │   │   │   ├── envmap_physical_pars_fragment.glsl.js
│   │       │   │   │   ├── envmap_vertex.glsl.js
│   │       │   │   │   ├── fog_fragment.glsl.js
│   │       │   │   │   ├── fog_pars_fragment.glsl.js
│   │       │   │   │   ├── fog_pars_vertex.glsl.js
│   │       │   │   │   ├── fog_vertex.glsl.js
│   │       │   │   │   ├── gradientmap_pars_fragment.glsl.js
│   │       │   │   │   ├── iridescence_fragment.glsl.js
│   │       │   │   │   ├── iridescence_pars_fragment.glsl.js
│   │       │   │   │   ├── lightmap_fragment.glsl.js
│   │       │   │   │   ├── lightmap_pars_fragment.glsl.js
│   │       │   │   │   ├── lights_fragment_begin.glsl.js
│   │       │   │   │   ├── lights_fragment_end.glsl.js
│   │       │   │   │   ├── lights_fragment_maps.glsl.js
│   │       │   │   │   ├── lights_lambert_fragment.glsl.js
│   │       │   │   │   ├── lights_lambert_pars_fragment.glsl.js
│   │       │   │   │   ├── lights_pars_begin.glsl.js
│   │       │   │   │   ├── lights_phong_fragment.glsl.js
│   │       │   │   │   ├── lights_phong_pars_fragment.glsl.js
│   │       │   │   │   ├── lights_physical_fragment.glsl.js
│   │       │   │   │   ├── lights_physical_pars_fragment.glsl.js
│   │       │   │   │   ├── lights_toon_fragment.glsl.js
│   │       │   │   │   ├── lights_toon_pars_fragment.glsl.js
│   │       │   │   │   ├── logdepthbuf_fragment.glsl.js
│   │       │   │   │   ├── logdepthbuf_pars_fragment.glsl.js
│   │       │   │   │   ├── logdepthbuf_pars_vertex.glsl.js
│   │       │   │   │   ├── logdepthbuf_vertex.glsl.js
│   │       │   │   │   ├── map_fragment.glsl.js
│   │       │   │   │   ├── map_pars_fragment.glsl.js
│   │       │   │   │   ├── map_particle_fragment.glsl.js
│   │       │   │   │   ├── map_particle_pars_fragment.glsl.js
│   │       │   │   │   ├── metalnessmap_fragment.glsl.js
│   │       │   │   │   ├── metalnessmap_pars_fragment.glsl.js
│   │       │   │   │   ├── morphcolor_vertex.glsl.js
│   │       │   │   │   ├── morphnormal_vertex.glsl.js
│   │       │   │   │   ├── morphtarget_pars_vertex.glsl.js
│   │       │   │   │   ├── morphtarget_vertex.glsl.js
│   │       │   │   │   ├── normal_fragment_begin.glsl.js
│   │       │   │   │   ├── normal_fragment_maps.glsl.js
│   │       │   │   │   ├── normal_pars_fragment.glsl.js
│   │       │   │   │   ├── normal_pars_vertex.glsl.js
│   │       │   │   │   ├── normal_vertex.glsl.js
│   │       │   │   │   ├── normalmap_pars_fragment.glsl.js
│   │       │   │   │   ├── opaque_fragment.glsl.js
│   │       │   │   │   ├── packing.glsl.js
│   │       │   │   │   ├── premultiplied_alpha_fragment.glsl.js
│   │       │   │   │   ├── project_vertex.glsl.js
│   │       │   │   │   ├── roughnessmap_fragment.glsl.js
│   │       │   │   │   ├── roughnessmap_pars_fragment.glsl.js
│   │       │   │   │   ├── shadowmap_pars_fragment.glsl.js
│   │       │   │   │   ├── shadowmap_pars_vertex.glsl.js
│   │       │   │   │   ├── shadowmap_vertex.glsl.js
│   │       │   │   │   ├── shadowmask_pars_fragment.glsl.js
│   │       │   │   │   ├── skinbase_vertex.glsl.js
│   │       │   │   │   ├── skinning_pars_vertex.glsl.js
│   │       │   │   │   ├── skinning_vertex.glsl.js
│   │       │   │   │   ├── skinnormal_vertex.glsl.js
│   │       │   │   │   ├── specularmap_fragment.glsl.js
│   │       │   │   │   ├── specularmap_pars_fragment.glsl.js
│   │       │   │   │   ├── tonemapping_fragment.glsl.js
│   │       │   │   │   ├── tonemapping_pars_fragment.glsl.js
│   │       │   │   │   ├── transmission_fragment.glsl.js
│   │       │   │   │   ├── transmission_pars_fragment.glsl.js
│   │       │   │   │   ├── uv_pars_fragment.glsl.js
│   │       │   │   │   ├── uv_pars_vertex.glsl.js
│   │       │   │   │   ├── uv_vertex.glsl.js
│   │       │   │   │   └── worldpos_vertex.glsl.js
│   │       │   │   ├── ShaderChunk.js
│   │       │   │   ├── ShaderLib
│   │       │   │   │   ├── background.glsl.js
│   │       │   │   │   ├── backgroundCube.glsl.js
│   │       │   │   │   ├── cube.glsl.js
│   │       │   │   │   ├── depth.glsl.js
│   │       │   │   │   ├── distanceRGBA.glsl.js
│   │       │   │   │   ├── equirect.glsl.js
│   │       │   │   │   ├── linedashed.glsl.js
│   │       │   │   │   ├── meshbasic.glsl.js
│   │       │   │   │   ├── meshlambert.glsl.js
│   │       │   │   │   ├── meshmatcap.glsl.js
│   │       │   │   │   ├── meshnormal.glsl.js
│   │       │   │   │   ├── meshphong.glsl.js
│   │       │   │   │   ├── meshphysical.glsl.js
│   │       │   │   │   ├── meshtoon.glsl.js
│   │       │   │   │   ├── points.glsl.js
│   │       │   │   │   ├── shadow.glsl.js
│   │       │   │   │   ├── sprite.glsl.js
│   │       │   │   │   └── vsm.glsl.js
│   │       │   │   ├── ShaderLib.js
│   │       │   │   ├── UniformsLib.js
│   │       │   │   └── UniformsUtils.js
│   │       │   ├── webgl
│   │       │   │   ├── WebGLAnimation.js
│   │       │   │   ├── WebGLAttributes.js
│   │       │   │   ├── WebGLBackground.js
│   │       │   │   ├── WebGLBindingStates.js
│   │       │   │   ├── WebGLBufferRenderer.js
│   │       │   │   ├── WebGLCapabilities.js
│   │       │   │   ├── WebGLClipping.js
│   │       │   │   ├── WebGLCubeMaps.js
│   │       │   │   ├── WebGLCubeUVMaps.js
│   │       │   │   ├── WebGLExtensions.js
│   │       │   │   ├── WebGLGeometries.js
│   │       │   │   ├── WebGLIndexedBufferRenderer.js
│   │       │   │   ├── WebGLInfo.js
│   │       │   │   ├── WebGLLights.js
│   │       │   │   ├── WebGLMaterials.js
│   │       │   │   ├── WebGLMorphtargets.js
│   │       │   │   ├── WebGLObjects.js
│   │       │   │   ├── WebGLProgram.js
│   │       │   │   ├── WebGLPrograms.js
│   │       │   │   ├── WebGLProperties.js
│   │       │   │   ├── WebGLRenderLists.js
│   │       │   │   ├── WebGLRenderStates.js
│   │       │   │   ├── WebGLShader.js
│   │       │   │   ├── WebGLShaderCache.js
│   │       │   │   ├── WebGLShadowMap.js
│   │       │   │   ├── WebGLState.js
│   │       │   │   ├── WebGLTextures.js
│   │       │   │   ├── WebGLUniforms.js
│   │       │   │   ├── WebGLUniformsGroups.js
│   │       │   │   └── WebGLUtils.js
│   │       │   └── webxr
│   │       │       ├── WebXRController.js
│   │       │       └── WebXRManager.js
│   │       ├── scenes
│   │       │   ├── Fog.js
│   │       │   ├── FogExp2.js
│   │       │   └── Scene.js
│   │       ├── textures
│   │       │   ├── CanvasTexture.js
│   │       │   ├── CompressedArrayTexture.js
│   │       │   ├── CompressedCubeTexture.js
│   │       │   ├── CompressedTexture.js
│   │       │   ├── CubeTexture.js
│   │       │   ├── Data3DTexture.js
│   │       │   ├── DataArrayTexture.js
│   │       │   ├── DataTexture.js
│   │       │   ├── DepthTexture.js
│   │       │   ├── FramebufferTexture.js
│   │       │   ├── Source.js
│   │       │   ├── Texture.js
│   │       │   └── VideoTexture.js
│   │       └── utils.js
│   └── vite
│       ├── LICENSE.md
│       ├── README.md
│       ├── bin
│       │   ├── openChrome.applescript
│       │   └── vite.js
│       ├── client.d.ts
│       ├── dist
│       │   ├── client
│       │   │   ├── client.mjs
│       │   │   ├── client.mjs.map
│       │   │   ├── env.mjs
│       │   │   └── env.mjs.map
│       │   ├── node
│       │   │   ├── chunks
│       │   │   │   ├── dep-8a-6Quh6.js
│       │   │   │   ├── dep-WV5u8Hxr.js
│       │   │   │   ├── dep-Y5q53UKR.js
│       │   │   │   ├── dep-kjUoH5nk.js
│       │   │   │   └── dep-uAHLeuC6.js
│       │   │   ├── cli.js
│       │   │   ├── constants.js
│       │   │   ├── index.d.ts
│       │   │   └── index.js
│       │   └── node-cjs
│       │       └── publicUtils.cjs
│       ├── index.cjs
│       ├── index.d.cts
│       ├── package.json
│       └── types
│           ├── customEvent.d.ts
│           ├── hmrPayload.d.ts
│           ├── hot.d.ts
│           ├── import-meta.d.ts
│           ├── importGlob.d.ts
│           ├── importMeta.d.ts
│           ├── metadata.d.ts
│           └── package.json
├── package-lock.json
└── package.json



## Requirements

- Visual studio code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Live server: [https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Node.js: [http://nodejs.org/](http://nodejs.org/)
- Three.js: [https://threejs.org/docs/#manual/en/introduction/Installation](https://threejs.org/docs/#manual/en/introduction/Installation)


## How to Start

First open the code on your local PC. After that open the console and install the packages. After the installation, you click on the Live server and it opens on your browser.

**Steps to get started:**
- Open the code.
- Install dependencies: `npm i`.
- Run the live server. 


## License

Copyright © 2024 Liv Knapen. All rights reserved.