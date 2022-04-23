import {
    Object3D,
    BufferGeometry,
    Float32BufferAttribute,
    Points,
    PointsMaterial,
    Texture, Color
  } from 'three'
  
  interface PointHelperOptions {
    map?: Texture,
    color?: Color,
    transparent?: boolean,
    opacity?: number,
    yDepth?: number,
    size?: number,
  }
  
  export class PointHelper extends Object3D {
    constructor(size: number, divisions: number, options: PointHelperOptions = {}) {
      super()
  
      if (divisions % 2 !== 0) {
        divisions = divisions + 1
      }
  
      const pointDistance = size / divisions
      this.type = 'PointHelper'
  
      const _points: any = []
  
      const geometry = new BufferGeometry()
      const material = new PointsMaterial({
        size: options.size || 0.5,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
      })
  
      if (options.map !== undefined) material.map = options.map
      if (options.color !== undefined) material.color = options.color
      if (options.transparent !== undefined) material.transparent = options.transparent
      if (options.opacity !== undefined) material.opacity = options.opacity
  
      const vertices = []
  
      for (let j = -divisions / 2; j < divisions / 2; j++) {
        let t = j * pointDistance
        for (let i = -divisions / 2; i < divisions / 2; i++) {
          vertices.push(i * pointDistance, options.yDepth !== undefined ? options.yDepth : -0.1, t)
        }
      }
  
      geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))
  
      _points.push(new Points(geometry, material))
      this.children = _points
    }
  }
  
  