import tamaguiConfig from '@/tamagui.config';
import { linkTo } from 'expo-router/build/global-state/routing';
import React, { useState } from 'react';
import { Button, Input, TamaguiProvider, Text, YStack, XStack, Spinner } from 'tamagui';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Giriş başarılı! Hoş geldiniz, ${email}`);
    }, 1500);
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <YStack
        f={1}
        bg="$background"
        w={390}
        h="100vh"
        minHeight={844}
      >
        {/* Header */}
        <YStack pt={80} px={24} pb={40}>
          <Text fontSize={34} fontWeight="700" color="$color12" mb={8}>
            Merhaba,
          </Text>
          <Text fontSize={34} fontWeight="700" color="$color12">
            Tekrar Hoş Geldin 👋
          </Text>
        </YStack>

        {/* Form */}
        <YStack px={24} space={16}>
          {/* Email */}
          <YStack space={8}>
            <Text fontSize={14} fontWeight="600" color="$color11" ml={4}>
              E-posta
            </Text>
            <Input
              placeholder="E-posta adresinizi girin"
              value={email}
              onChangeText={setEmail}
              h={56}
              bg="$color2"
              borderWidth={0}
              br={12}
              px={16}
              fontSize={16}
              placeholderTextColor="$color9"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </YStack>

          {/* Password */}
          <YStack space={8}>
            <XStack jc="space-between" ai="center" px={4}>
              <Text fontSize={14} fontWeight="600" color="$color11">
                Şifre
              </Text>
              <Text
                fontSize={14}
                fontWeight="600"
                color="$blue10"
                onPress={() => alert('Şifremi unuttum')}
              >
                Unuttum?
              </Text>
            </XStack>
            <Input
              placeholder="Şifrenizi girin"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              h={56}
              bg="$color2"
              borderWidth={0}
              br={12}
              px={16}
              fontSize={16}
              placeholderTextColor="$color9"
            />
          </YStack>

          {/* Login Button */}
          <Button
            bg="$blue10"
            h={56}
            br={12}
            mt={8}
            onPress={handleLogin}
            disabled={isLoading || !email || !password}
            opacity={isLoading || !email || !password ? 0.5 : 1}
            pressStyle={{ opacity: 0.8 }}
            borderWidth={0}
          >
            {isLoading ? (
              <XStack space={12} ai="center">
                <Spinner size="small" color="white" />
                <Text color="white" fontSize={16} fontWeight="600">
                  Giriş yapılıyor...
                </Text>
              </XStack>
            ) : (
              <Text color="white" fontSize={16} fontWeight="600">
                Giriş Yap
              </Text>
            )}
          </Button>

          {/* Divider */}
          

          {/* Social Buttons */}
   

          {/* Sign Up */}
          <XStack jc="center" pt={32}>
            <Text fontSize={15} color="$color10">
              Hesabın yok mu?{' '}
            </Text>
            <Text
              fontSize={15}
              fontWeight="600"
              color="$blue10"
              onPress={() => linkTo('/auth/register')}
            >
              Kayıt Ol
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </TamaguiProvider>
  );
}