AFRAME.registerComponent("enemy-bullets",{
    init:function(){
        setInterval(this.shootEnemyBullet, 3000)
    },
    shootEnemyBullet:function(){
        var els=document.querySelector(".enemy")
        for(i=0;i<els.length;i++){
            var enemyBullet=document.createElement("a-entity")
            enemyBullet.setAttribute("geometry",{primitive:"sphere", radius:0.1})
            enemyBullet.setAttribute("material","color","black")
            var position=els[i].getAttribute("position")
            enemyBullet.setAttribute("position",{x:position.x+1.5, y:position.y+3.5, z:position.z})
            scene=document.querySelector("#scene")
            scene.appendChild(enemyBullet)

            var pos1=new THREE.Vecctor3();
            var pos2=new THREE.Vector3();
            var enemy=els[i].object3D
            var player=document.querySelector("#weapon").object3D
            player.getWorldPosition(pos1)
            enemy.getWorldPosition(pos2)
            var direction=new THREE.vector3();
            direction.subVectors(pos1,pos2).normalize()
            enemyBullet.setAttribute("velocity",direction.multiplyScalar(10))
        }
    }
})