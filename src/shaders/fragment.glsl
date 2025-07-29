uniform vec2 iResolution;
uniform float iTime;

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
    float total = 0.0;
    float amplitude = 0.5;
    mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 5; i++) {
        total += amplitude * smoothNoise(p);
        p = rot * p * 2.0;
        amplitude *= 0.5;
    }
    return total;
}

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    uv -= 0.5;
    uv.x *= iResolution.x / iResolution.y;

    float t = iTime * 0.1;
    float n = fbm(uv * 2.0 + t);

    // Color palette blend
    vec3 col1 = vec3(0.886, 0.769, 0.549); // #E2C48C
    vec3 col2 = vec3(0.0, 0.278, 0.533);   // #004788
    vec3 col3 = vec3(0.015, 0.015, 0.027); // #040407

    vec3 color = mix(col2, col1, n);
    color = mix(col3, color, smoothstep(0.3, 0.7, n));

    gl_FragColor = vec4(color, 1.0);
}
