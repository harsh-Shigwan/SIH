import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function SignUpForm() {
  const [checked, setChecked] = React.useState(false);
  const formFields = [
    {
      id: "name",
      placeholder: "Enter your name",
      iconUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5559d61d5ce09e096e1d66d8d8886d41bde16c48dd32406cdc271b8e9a1ea7a?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
      type: "text",
    },
    {
      id: "email",
      placeholder: "Enter your email",
      iconUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/34e5f6262dd33cfe34d912ff38efe96533cfa602c72c570c74475e4062780307?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
      type: "email",
    },
    {
      id: "password",
      placeholder: "Enter your password",
      iconUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1dbb31d6b2940997c0626141cf07cc3942962395167f3dcb03cf2051e3be6f2?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
      type: "password",
      showPasswordIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fea47fd1e7a3308065f2ec5905e4e582cc901c071b0115a2c382722940377434?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
    },
  ];

  return (
    <View className="flex overflow-hidden flex-col px-8 py-14 text-sm bg-white max-w-[360px] text-stone-800">
      {/* Header Section */}
      <View className="flex gap-5 justify-between max-w-full text-lg font-bold leading-none text-center w-[185px]">
        <Image
          loading="lazy"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/75e6fed17a7bfbb7f040659d652642aad8b3b9bce758f74d566ed7bd9bd3d2bb?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
          }}
          className="object-contain shrink-0 w-10 aspect-square"
        />
        <View className="my-auto">
          <Text>Sign Up</Text>
        </View>
      </View>

      {/* Form Section */}
      <View role="form" accessible={true}>
        {formFields.map((field) => (
          <View
            key={field.id}
            className="flex gap-4 px-6 py-4 mt-6 bg-gray-50 rounded-md border border-solid border-stone-800 border-opacity-10"
          >
            <View className="flex gap-4 w-full flex-row items-center">
              <Image
                loading="lazy"
                source={{ uri: field.iconUri }}
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <View className="grow">
                <Text className="sr-only">{field.placeholder}</Text>
                <TextInput
                  id={field.id}
                  placeholder={field.placeholder}
                  secureTextEntry={field.type === "password"}
                  keyboardType={
                    field.type === "email" ? "email-address" : "default"
                  }
                  className="grow shrink w-full text-stone-800"
                  accessibilityLabel={field.placeholder}
                />
              </View>
              {field.showPasswordIcon && (
                <Image
                  loading="lazy"
                  source={{ uri: field.showPasswordIcon }}
                  className="object-contain shrink-0 w-6 aspect-square"
                />
              )}
            </View>
          </View>
        ))}

        {/* Checkbox Section */}
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          className="flex gap-4 self-start mt-4 text-sm leading-5 flex-row"
          accessibilityRole="checkbox"
          accessibilityState={{ checked }}
        >
          <View
            className={`flex shrink-0 self-start w-6 h-6 rounded-lg border-2 ${
              checked
                ? "bg-blue-500 border-blue-500"
                : "bg-white border-stone-800 border-opacity-40"
            }`}
          />
          <View className="w-full">
            <Text>
              I agree to the healthcare Terms of Service and Privacy Policy
            </Text>
          </View>
        </TouchableOpacity>

        {/* Sign-Up Button */}
        <TouchableOpacity
          className="px-16 py-4 mt-64 text-base font-semibold text-center text-white bg-blue-500 rounded-[32px]"
          accessibilityRole="button"
        >
          <Text className="text-white">Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View className="self-center mt-2.5 leading-none text-center">
        <Text>Don't have an account? Sign In</Text>
      </View>
    </View>
  );
}
