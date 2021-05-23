var scene, sceneLight, portalLight, cam, renderer, clock, portalParticles = [];

function initScene() {
    scene = new THREE.Scene();

    sceneLight = new THREE.DirectionalLight(0xffffff, 0.5);
    sceneLight.position.set(0, 0, 1);
    scene.add(sceneLight);

    portalLight = new THREE.PointLight(0x00ff00, 30, 350, 1.7);
    portalLight.position.set(0, 0, 250);
    scene.add(portalLight)

    cam = new THREE.PerspectiveCamera(
        80,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    cam.position.z = 1000;
    scene.add(cam);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);

    setupParticle();
}

function setupParticle() {
    let loader = new THREE.TextureLoader();

    var imgs =[
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke2.png",
        "resources/img/smoke4.png"
    ];
    var selected_img = imgs[Math.floor(Math.random()*imgs.length)];
    loader.load(selected_img, function (texture) {
        portalGeo = new THREE.PlaneBufferGeometry(350, 350);
        portalMaterial = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true
        });


        for (let p = 880; p > 250; p--) {
            let particle = new THREE.Mesh(portalGeo, portalMaterial);
            particle.position.set(
                0.5 * p * Math.cos((4 * p * Math.PI) / 180),
                0.5 * p * Math.sin((4 * p * Math.PI) / 180),
                0.1 * p
            );
            particle.rotation.z = Math.random() * 360;
            portalParticles.push(particle);
            scene.add(particle);
        }
        clock = new THREE.Clock();
        animate();

    });
}
function animate() {
    let delta = clock.getDelta();
    portalParticles.forEach(p => {
        p.rotation.z -= delta * 1.5;
    });
    renderer.render(scene, cam);
    requestAnimationFrame(animate);
}

initScene();