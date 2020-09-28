import React from "react";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";
import { useModel, model } from "ymcore/useModel";
model({
  namespace: "Demo",
  kk2n: 1
});
export default () => {
  let m = useModel("Demo");
  console.log("a", m);
  return (
    <View className="index">
      <View>
        <Text>{m.kk2n}</Text>
        <Text>Hello, World</Text>
        <Button
          onClick={() => {
            m.kk2nUp(m.kk2n + 1);
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            m.kk2nUp(m.kk2n - 1);
          }}
        >
          -
        </Button>
      </View>
    </View>
  );
};
