// 菲林斯雷电/暗夜粒子背景特效
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否已经加载过 particles.js，如果没有则动态引入CDN
  if (typeof particlesJS === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = initParticles;
    document.head.appendChild(script);
  } else {
    initParticles();
  }

  function initParticles() {
    const div = document.createElement('div');
    div.id = 'electric-particles';
    div.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-999;pointer-events:none;';
    document.body.prepend(div);

    particlesJS('electric-particles', {
      "particles": {
        "number": {
          "value": 60,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": {
          "value": ["#3b82f6", "#60a5fa", "#f97316"] // 雷电蓝、冰晶蓝、执灯人灯火橙
        },
        "shape": { "type": "circle" },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#3b82f6", // 雷电网状连线
          "opacity": 0.3,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab" // 鼠标悬停时电弧聚拢
          },
          "onclick": {
            "enable": true,
            "mode": "push" // 点击时粒子爆发
          },
          "resize": true
        },
        "modes": {
          "grab": { "distance": 140, "line_linked": { "opacity": 0.6 } },
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });
  }
});