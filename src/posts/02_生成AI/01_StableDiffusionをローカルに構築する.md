---
title: 'StableDiffusionをローカルに構築する'
created: '2023/08/13'
update: '2023/08/13'
tags: 
    - AI
    - Python
    - StableDiffusion

# ［Ctrl］＋［K］→［V］
---


Stable Diffusionは、テキストのプロンプトから高品質な画像を生成できる最新のAIです。本記事では、Stable Diffusionをローカルマシンに構築する方法を紹介します。

## メリット

Stable Diffusionをローカルで構築するメリットは以下の通りです。

- プライバシー保護 - クラウドサービスを使わずローカルで完結するため、個人情報が外部に漏れるリスクが低減します。

- コスト削減 - クラウドサービスの利用料金がかからないためコストを大幅に抑えられます。

- カスタマイズが容易 - ローカルなら設定を自由に変更でき、学習データやハイパラメータの調整が簡単です。

## 必要な環境

ローカルでStable Diffusionを動かすには、以下のようなマシンスペックが必要です。

- GPU: NVIDIA RTXシリーズ等の高性能GPU
- CPU: Intel Core i7等の高速マルチコアCPU
- RAM: 16GB以上 
- ストレージ: 10GB以上の空き容量

ソフトウェア環境としては以下が必要です。

- Python 3.7以上
- PyTorch 1.7以上  
- CUDA Toolkit
- cuDNN
- Docker

## インストール手順

## 1. 必要なソフトウェアのインストール

- Pythonの最新安定版をインストール
- PyTorchをpipでインストール
- NVIDIAサイトからCUDA ToolkitとcuDNNをダウンロード
- Dockerをインストール

## 2. 学習済みモデルのダウンロード

- diffusersライブラリを使ってモデルをダウンロード

```
git clone https://github.com/huggingface/diffusers.git
cd diffusers
pip install -e .
```

## 3. Stable Diffusionリポジトリのクローン

- git clone コマンドでリポジトリをクローン

```
git clone https://github.com/CompVis/stable-diffusion.git
```

## 4. config.yamlの設定変更

- 画像サイズ等の設定を必要に応じて変更

## 5. ローンチャースクリプトで起動

このように、順を追ってインストールしていけばローカルでの構築はできますが、設定次第でエラーが発生することもあります。トラブルシューティングのためにも、各手順の理解とバージョン確認が大切です。

Stable Diffusionを使えるようになれば、プライベートな環境で好きなようにテキストから画像生成を楽しむことができます。ローカル構築には多少の手間は掛かりますが、カスタマイズの自由度が高くなるのでオススメです。

以上、Stable Diffusionのローカル構築方法でした。実際に設定していく過程で分からないことがあれば、公式ドキュメントやフォーラムを参考にしてください。
