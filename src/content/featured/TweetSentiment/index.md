---
date: '4'
title: 'Tweet Sentiment'
cover: './demo-ts.png'
github: 'https://github.com/likarajo/twitter_sentiments'
external: 'https://likarajo.github.io/twitter_sentiments/'
tech:
  - Scala
  - SBT
  - Spark
  - Twitter API
  - Zookeeper
  - Kafka
  - ElasticSearch
  - Logstash
  - Kibana
show: 'true'
---

A Spark Streaming application for live tweets sentiment analysis, created using Scala to continuously read data from Twitter about a topic. 
A stream of status updates is obtained using TwitterUtils.
The sentiments associated with the statuses are obtained using Stanford CoreNLP library.
The sentiment data is then sent to ElasticSearch for analysis. 
Data is exchanged between the Spark application and ElasticSearch using Kafka as the broker. 
Data is ingested from the Kafka server and mapped to the required ElasticSearch server using LogStash. 
Finally, the sentiments are visualized in Kibana.