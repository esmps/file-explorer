/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   get_next_line_utils.c                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: epines-s <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/03/03 18:41:29 by epines-s          #+#    #+#             */
/*   Updated: 2020/03/03 19:34:56 by epines-s         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "get_next_line.h"

char	*ft_substr(char const *s, unsigned int start, size_t len)
{
	char	*sub;

	sub = ft_memalloc(len);
	if (!s || !sub)
		return (NULL);
	return (ft_strncpy(sub, s + start, len));
}

char	*ft_strjoin(char const *s1, char const *s2)
{
	char	*join;

	if (!s1 || !s2)
		return (NULL);
	join = ft_memalloc(ft_strlen(s1) + ft_strlen(s2));
	if (!join)
		return (NULL);
	join = ft_strcat(join, s1);
	return (ft_strcat(join, s2));
}

char	*ft_strncpy(char *dst, const char *src, size_t n)
{
	size_t i;

	i = 0;
	while (src[i] != '\0' && i < n)
	{
		dst[i] = src[i];
		i++;
	}
	while (i < n)
	{
		dst[i] = '\0';
		i++;
	}
	return (dst);
}

char	*ft_strcat(char *dst, const char *src)
{
	int i;
	int j;

	i = 0;
	j = 0;
	while (dst[i] != '\0')
		i++;
	while (src[j] != '\0')
	{
		dst[i + j] = src[j];
		j++;
	}
	dst[i + j] = '\0';
	return (dst);
}

void	*ft_memalloc(size_t size)
{
	void	*r;
	char	*s;

	r = (char *)malloc(size + 1);
	if (r == NULL)
		return (r);
	s = (char *)r;
	while (size)
	{
		*s = (char)0;
		s++;
		size--;
	}
	return (r);
}
