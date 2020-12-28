/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   libft_bonus.h                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: epines-s <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/03/07 13:56:28 by epines-s          #+#    #+#             */
/*   Updated: 2020/03/10 22:19:45 by epines-s         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef LIBFT_BONUS_H
# define LIBFT_BONUS_H
# include <unistd.h>
# include <stdio.h>
# include <stdlib.h>
# include <string.h>
# include "libft.h"

int		ft_islower(int c);
int		ft_isupper(int c);
int		ft_isspace(char c);
int		ft_pow(int n, int p);
int		ft_abs(int n);
int		ft_putchar(int c);
void	ft_putstr(char const *s);
void	ft_putendl(char const *s);
int		ft_putnbr(int n);
char	*ft_strstr(const char *haystack, const char *needle);
char	*ft_strcpy(char *dst, const char *src);
char	*ft_strcat(char *dst, const char *src);

#endif
