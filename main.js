function main() {
    var scene = new THREE.Scene();

    var box = genBox(1, 1, 1);
    box.name = 'box1';
    box.position.y = box.geometry.parameters.height / 2;

    var floor = genFloor(20, 30);
    floor.rotation.x = Math.PI / 2;

    floor.name = 'floot';
    floor.add(box)
    scene.add(floor);


    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x = 1;
    camera.position.y = 5;
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, -5));

    var gpu_renderer = new THREE.WebGLRenderer();
    gpu_renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(gpu_renderer.domElement);
    update(gpu_renderer, scene, camera);

    return scene;
}

function genFloor(w, d) {
    var geo = new THREE.PlaneGeometry(w, d);
    var mat = new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        side: THREE.DoubleSide
    })
    var mesh = new THREE.Mesh(geo, mat);
    return mesh;
}

function genBox(w, h, d) {
    var geo = new THREE.BoxGeometry(w, h, d);
    var mat = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    })
    var mesh = new THREE.Mesh(geo, mat);
    return mesh;
}

function update(gpu_renderer, scene, camera) {
    gpu_renderer.render(scene, camera);

    scene.children[0].rotation.y += 0.002;
    scene.children[0].rotation.z += 0.002;

    scene.traverse(function (child) {
        child.position.x += 0.0001;
    })

    requestAnimationFrame(function () {
        update(gpu_renderer, scene, camera);
    });
}

var scene = main();
console.log(scene)