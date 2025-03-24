import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  
  const mutation = useMutation({
    mutationFn: (formData: FormValues) => 
      apiRequest('POST', '/api/contact', formData),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
        variant: "default",
      });
      reset();
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    }
  });
  
  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-gray-900 dark:text-white">Get in <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss how my research expertise can help your project or organization achieve its goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6 font-inter text-gray-900 dark:text-white">Send Me a Message</h3>
              
              {submitted ? (
                <div className="text-center p-6">
                  <div className="text-green-500 mb-4 text-5xl">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">Thank You!</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Your message has been sent successfully.</p>
                  <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white`}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white`}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white`}
                      {...register('subject')}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="How can I help you?"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white`}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 font-inter text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Comilla District, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">Email</h4>
                    <a href="mailto:tanjina@example.com" className="text-primary hover:text-blue-700">tanjina@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fab fa-linkedin text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">LinkedIn</h4>
                    <a href="https://linkedin.com/in/tanjinaakter" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700">linkedin.com/in/tanjinaakter</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-inter text-gray-900 dark:text-white">Availability</h3>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-medium dark:text-white">Available for New Projects</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I'm currently available for consulting opportunities and project-based work in UX research and lead generation.
                </p>
                
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Current Response Time</h4>
                  <p className="text-gray-700 dark:text-gray-300">24-48 hours for initial consultations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
