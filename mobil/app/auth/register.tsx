import tamaguiConfig from '@/tamagui.config';
import React, { useState } from 'react';
import { Button, Input, Spinner, TamaguiProvider, Text, XStack, YStack } from 'tamagui';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Şifreler eşleşmiyor!');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Kayıt başarılı! Hoş geldiniz, ${name}`);
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
            Aramıza Katıl,
          </Text>
          <Text fontSize={34} fontWeight="700" color="$color12">
            Ve Bizimle Yarış👋
          </Text>
        </YStack>

        {/* Form */}
        <YStack px={24} space={16}>
          {/* Name */}
          <YStack space={8}>
            <Text fontSize={14} fontWeight="600" color="$color11" ml={4}>
              Ad Soyad
            </Text>
            <Input
              placeholder="Adınızı ve soyadınızı girin"
              value={name}
              onChangeText={setName}
              h={56}
              bg="$color2"
              borderWidth={0}
              br={12}
              px={16}
              fontSize={16}
              placeholderTextColor="$color9"
              autoCapitalize="words"
            />
          </YStack>

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
            <Text fontSize={14} fontWeight="600" color="$color11" ml={4}>
              Şifre
            </Text>
            <Input
              placeholder="Şifrenizi oluşturun"
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

          {/* Confirm Password */}
          <YStack space={8}>
            <Text fontSize={14} fontWeight="600" color="$color11" ml={4}>
              Şifre Tekrar
            </Text>
            <Input
              placeholder="Şifrenizi tekrar girin"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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

          {/* Register Button */}
          <Button
            bg="$blue10"
            h={56}
            br={12}
            mt={8}
            onPress={handleRegister}
            disabled={isLoading || !name || !email || !password || !confirmPassword}
            opacity={isLoading || !name || !email || !password || !confirmPassword ? 0.5 : 1}
            pressStyle={{ opacity: 0.8 }}
            borderWidth={0}
          >
            {isLoading ? (
              <XStack space={12} ai="center">
                <Spinner size="small" color="white" />
                <Text color="white" fontSize={16} fontWeight="600">
                  Kayıt yapılıyor...
                </Text>
              </XStack>
            ) : (
              <Text color="white" fontSize={16} fontWeight="600">
                Kayıt Ol
              </Text>
            )}
          </Button>

          {/* Terms */}
          <Text fontSize={12} color="$color9" textAlign="center" mt={16} px={20}>
            Kayıt ol butonuna basarak{' '}
            <Text 
              color="$blue10" 
              fontSize={12}
              onPress={() => alert('Kullanım koşulları')}
            >
              Kullanım Koşulları
            </Text>{' '}
            ve{' '}
            <Text 
              color="$blue10" 
              fontSize={12}
              onPress={() => alert('Gizlilik politikası')}
            >
              Gizlilik Politikası
            </Text>'nı kabul etmiş olursunuz.
          </Text>

          {/* Login */}
          <XStack jc="center" pt={24}>
            <Text fontSize={15} color="$color10">
              Zaten hesabın var mı?{' '}
            </Text>
            <Text
              fontSize={15}
              fontWeight="600"
              color="$blue10"
              onPress={() => alert('Giriş yap')}
            >
              Giriş Yap
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </TamaguiProvider>
  );
}