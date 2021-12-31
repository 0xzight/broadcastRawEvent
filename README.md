# broadcastRawEvent
A mini api service, to broadcast raw transaction to Ethereum node, support Binance Smart Chain also.  

## http example to broadcast event

```
GET / HTTP/1.1
Host: localhost:5050
Content-Type: application/json
Content-Length: 432

{
"nodeUrl": "https://data-seed-prebsc-2-s2.binance.org:8545/",
"rawTNX":"0xf8aa068502540be400828db2942fe7c4514564873fdfa68bd60794bd0f6f79c47680b844a9059cbb000000000000000000000000c906db6b8b282716235f504e9294bb64c2b768c3000000000000000000000000000000000000000000000002b5e3af16b188000081e6a0fb2cf8eae914bfcb79e04c8f0eac27b3457c0dca8c7756ba8379bc660bcbcf9ea0035f0b78940757442b88e820b46ca7a3fc764a91b0df6f0629d6ecb29fc34817"
}
```


## postman

post url 'localhost:5050'
body using raw json input example:
>
```
{
"nodeUrl": "https://data-seed-prebsc-2-s2.binance.org:8545/",
"rawTNX":"0xf8aa068502540be400828db2942fe7c4514564873fdfa68bd60794bd0f6f79c47680b844a9059cbb000000000000000000000000c906db6b8b282716235f504e9294bb64c2b768c3000000000000000000000000000000000000000000000002b5e3af16b188000081e6a0fb2cf8eae914bfcb79e04c8f0eac27b3457c0dca8c7756ba8379bc660bcbcf9ea0035f0b78940757442b88e820b46ca7a3fc764a91b0df6f0629d6ecb29fc34817"
}
```

## param explain 
>
nodeUrl is the node url connect for rpc http call
>
rawTNX is the signed raw transaction by hex

