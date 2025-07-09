import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['mobx'],
  turbopack: {
    rules: {
      '*.ts': {
        loaders: ['babel-loader'],
        as: '*.js',
        options: {
          // loaders: [
          //   {
          //     loader: 'babel-loader',
          //     options: {
          presets: ['next/babel'],
          plugins: [
            "@babel/plugin-proposal-decorators",
            {
              "version": "2023-05"
            }
          ]
          //   ]
          // }
          // }
          // ]
        }
      }
    }
  }
}

export default nextConfig
