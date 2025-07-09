import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['mobx'],
  turbopack: {
    rules: {
      '*.ts': {
        as: '*.js',
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['next/babel'],
              plugins: [
                ['@babel/plugin-proposal-decorators', {
                  version: "2023-11",
                  decoratorsBeforeExport: true
                }],
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
        ]
      },
    }
  }
}

export default nextConfig
