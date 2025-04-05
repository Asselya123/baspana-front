import os
import uuid
import datetime
from django.core.management.base import BaseCommand
from django.conf import settings
from django.utils import timezone
from django.contrib.auth import get_user_model
from apartments.models import Builder, Apartment, UploadedFile, Application, UserProfile

User = get_user_model()


class Command(BaseCommand):
    help = 'Creates mock data for the application using the newest models'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Creating mock data...'))

        # Create sample builders
        builders = self._create_builders()

        # Create sample apartments
        apartments = self._create_apartments(builders)

        # Create sample uploaded files
        uploaded_files = self._create_uploaded_files()

        # Create sample user and user profile
        sample_user = self._get_or_create_sample_user()
        self._create_user_profile(sample_user)

        # Create sample applications
        applications = self._create_applications(sample_user)

        self.stdout.write(self.style.SUCCESS(
            f'Created {len(builders)} builders, {len(apartments)} apartments, '
            f'{len(uploaded_files)} uploaded files, and {len(applications)} applications.'
        ))

    def _create_builders(self):
        builders_data = [
            {
                'name': 'BI Group',
                'contacts': 'Нур-Султан, проспект Мангилик Ел, 52/2, 6 этаж',
                'phone_number': '+7 (717) 269-00-00',
                'site': 'https://bi.group',
                'email': 'info@bi.group',
                'icon': 'https://bi.group/images/logo.png',
            },
            {
                'name': 'BAZIS-A',
                'contacts': 'Алматы, улица Кармысова, 66',
                'phone_number': '+7 (727) 393-20-20',
                'site': 'https://bazis.kz',
                'email': 'info@bazis.kz',
                'icon': 'https://bazis.kz/images/logo.png',
            },
            {
                'name': 'G-Park',
                'contacts': 'Алматы, улица Жарокова, 2/1',
                'phone_number': '+7 (707) 707-67-77',
                'site': 'https://g-park.kz',
                'email': 'info@g-park.kz',
                'icon': 'https://g-park.kz/images/logo.png',
            },
        ]
        builders = []
        for data in builders_data:
            builder, created = Builder.objects.get_or_create(
                name=data['name'],
                defaults=data
            )
            builders.append(builder)
            if created:
                self.stdout.write(f'Created builder: {builder.name}')
            else:
                self.stdout.write(f'Builder already exists: {builder.name}')
        return builders

    def _create_apartments(self, builders):
        apartments_data = [
            {
                'name': 'ЖК Botanical Garden',
                'address': 'Алматы, улица Тимирязева, 15',
                'images': [
                    'https://example.com/images/botanical1.jpg',
                    'https://example.com/images/botanical2.jpg',
                    'https://example.com/images/botanical3.jpg',
                ],
                'object_code': 'BOT-001',
                'floor': 24,
                'building_count': 5,
                'material': 'monolithic',
                'start_date': datetime.date(2023, 6, 1),
                'end_date': datetime.date(2025, 12, 31),
                'available_programs': [
                    'Ипотека под 7%',
                    'Рассрочка на 2 года',
                    'Специальные условия для льготников'
                ],
                'conditions': [
                    'Первоначальный взнос от 20%',
                    'Документы удостоверения личности',
                    'Подтверждение дохода'
                ],
                'description': 'ЖК Botanical Garden - премиум комплекс с видом на Ботанический сад. Просторные планировки, качественная отделка, подземный паркинг и охраняемая территория.',
                'has_balcony': True,
                'is_balcony_glazed': True,
                'building_start_date': datetime.date(2023, 1, 15),
                'home_type': 'apartment',
                'bathroom_type': 'separate',
                'security': 'concierge',
                'parking_type': 'underground',
                'elevator_type': 'both',
                'apartment_types': [
                    {
                        'label': '1-комнатная',
                        'room_count': 1,
                        'min_area': 45,
                        'max_area': 55,
                        'cost_per_square_meter': 500000,
                        'available_count': 10,
                        'scheme_url': 'https://example.com/images/botanical_1room.jpg'
                    },
                    {
                        'label': '2-комнатная',
                        'room_count': 2,
                        'min_area': 65,
                        'max_area': 75,
                        'cost_per_square_meter': 480000,
                        'available_count': 7,
                        'scheme_url': 'https://example.com/images/botanical_2room.jpg'
                    },
                    {
                        'label': '3-комнатная',
                        'room_count': 3,
                        'min_area': 90,
                        'max_area': 120,
                        'cost_per_square_meter': 450000,
                        'available_count': 5,
                        'scheme_url': 'https://example.com/images/botanical_3room.jpg'
                    }
                ],
                'builder': builders[0]
            },
            {
                'name': 'ЖК Green Valley',
                'address': 'Алматы, улица Навои, 310',
                'images': [
                    'https://example.com/images/green_valley1.jpg',
                    'https://example.com/images/green_valley2.jpg',
                ],
                'object_code': 'GRV-002',
                'floor': 16,
                'building_count': 3,
                'material': 'brick',
                'start_date': datetime.date(2023, 3, 15),
                'end_date': datetime.date(2025, 9, 30),
                'available_programs': [
                    'Ипотека под 8.5%',
                    'Рассрочка на 18 месяцев'
                ],
                'conditions': [
                    'Первоначальный взнос от 30%',
                    'Документы удостоверения личности',
                ],
                'description': 'ЖК Green Valley - уютный семейный комплекс в экологически чистом районе города. Развитая инфраструктура, детские площадки, спортивные сооружения.',
                'has_balcony': True,
                'is_balcony_glazed': True,
                'building_start_date': datetime.date(2022, 11, 10),
                'home_type': 'apartment',
                'bathroom_type': 'combined',
                'security': 'security',
                'parking_type': 'ground',
                'elevator_type': 'passenger',
                'apartment_types': [
                    {
                        'label': '1-комнатная',
                        'room_count': 1,
                        'min_area': 40,
                        'max_area': 50,
                        'cost_per_square_meter': 420000,
                        'available_count': 15,
                        'scheme_url': 'https://example.com/images/green_valley_1room.jpg'
                    },
                    {
                        'label': '2-комнатная',
                        'room_count': 2,
                        'min_area': 60,
                        'max_area': 70,
                        'cost_per_square_meter': 400000,
                        'available_count': 10,
                        'scheme_url': 'https://example.com/images/green_valley_2room.jpg'
                    }
                ],
                'builder': builders[1]
            },
            {
                'name': 'ЖК Nova City',
                'address': 'Нур-Султан, проспект Туран, 55',
                'images': [
                    'https://example.com/images/nova_city1.jpg',
                    'https://example.com/images/nova_city2.jpg',
                    'https://example.com/images/nova_city3.jpg',
                ],
                'object_code': 'NOV-003',
                'floor': 20,
                'building_count': 7,
                'material': 'monolithic',
                'start_date': datetime.date(2022, 12, 1),
                'end_date': datetime.date(2025, 6, 30),
                'available_programs': [
                    'Ипотека под 7.5%',
                    'Рассрочка на 24 месяца',
                    'Программа "Молодая семья"'
                ],
                'conditions': [
                    'Первоначальный взнос от 15%',
                    'Документы удостоверения личности',
                    'Подтверждение дохода',
                    'Семейное положение (для программы "Молодая семья")'
                ],
                'description': 'ЖК Nova City - современный комплекс в быстро развивающемся районе столицы. Умные квартиры, панорамные окна, подземный паркинг.',
                'has_balcony': True,
                'is_balcony_glazed': True,
                'building_start_date': datetime.date(2022, 8, 5),
                'home_type': 'apartment',
                'bathroom_type': 'separate',
                'security': 'concierge',
                'parking_type': 'underground',
                'elevator_type': 'both',
                'apartment_types': [
                    {
                        'label': '1-комнатная студия',
                        'room_count': 1,
                        'min_area': 35,
                        'max_area': 45,
                        'cost_per_square_meter': 450000,
                        'available_count': 20,
                        'scheme_url': 'https://example.com/images/nova_city_studio.jpg'
                    },
                    {
                        'label': '2-комнатная',
                        'room_count': 2,
                        'min_area': 55,
                        'max_area': 65,
                        'cost_per_square_meter': 430000,
                        'available_count': 15,
                        'scheme_url': 'https://example.com/images/nova_city_2room.jpg'
                    },
                    {
                        'label': '3-комнатная',
                        'room_count': 3,
                        'min_area': 80,
                        'max_area': 100,
                        'cost_per_square_meter': 410000,
                        'available_count': 8,
                        'scheme_url': 'https://example.com/images/nova_city_3room.jpg'
                    },
                    {
                        'label': '4-комнатная',
                        'room_count': 4,
                        'min_area': 120,
                        'max_area': 150,
                        'cost_per_square_meter': 400000,
                        'available_count': 5,
                        'scheme_url': 'https://example.com/images/nova_city_4room.jpg'
                    }
                ],
                'builder': builders[0]
            }
        ]
        apartments = []
        for data in apartments_data:
            builder = data.pop('builder')
            apartment, created = Apartment.objects.get_or_create(
                name=data['name'],
                defaults={**data, 'builder': builder}
            )
            apartments.append(apartment)
            if created:
                self.stdout.write(f'Created apartment: {apartment.name}')
            else:
                self.stdout.write(f'Apartment already exists: {apartment.name}')
        return apartments

    def _create_uploaded_files(self):
        # Create a directory for mock files if it doesn't exist
        media_root = settings.MEDIA_ROOT
        mock_file_dir = os.path.join(media_root, 'uploads', 'mock')
        os.makedirs(mock_file_dir, exist_ok=True)

        # Create sample text file
        text_file_path = os.path.join(mock_file_dir, 'sample.txt')
        with open(text_file_path, 'w', encoding='utf-8') as f:
            f.write('This is a sample text file for mock data')

        # Create sample image file (1x1 pixel JPEG)
        image_file_path = os.path.join(mock_file_dir, 'sample.jpg')
        if not os.path.exists(image_file_path):
            with open(image_file_path, 'wb') as f:
                f.write(bytes.fromhex(
                    'FFD8FFE000104A4649460001010100480048000000FFDB00430001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101FFDB00430101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101FFC00011080001000103012200021101031101FFC4001F0000010501010101010100000000000000000102030405060708090A0BFFC400B5100002010303020403050504040000017D01020300041105122131410613516107227114328191A1082342B1C11552D1F02433627282090A161718191A25262728292A3435363738393A434445464748494A535455565758595A636465666768696A737475767778797A83838485868788898A92939495969798999AA2A3A4A5A6A7A8A9AAB2B3B4B5B6B7B8B9BAC2C3C4C5C6C7C8C9CAD2D3D4D5D6D7D8D9DAE1E2E3E4E5E6E7E8E9EAF1F2F3F4F5F6F7F8F9FAFFC4001F0100030101010101010101010000000000000102030405060708090A0BFFC400B51100020102040403040705040400010277000102031104052131061241510761711322328108144291A1B1C109233352F0156272D10A162434E125F11718191A262728292A35363738393A434445464748494A535455565758595A636465666768696A737475767778797A82838485868788898A92939495969798999AA2A3A4A5A6A7A8A9AAB2B3B4B5B6B7B8B9BAC2C3C4C5C6C7C8C9CAD2D3D4D5D6D7D8D9DAE2E3E4E5E6E7E8E9EAF2F3F4F5F6F7F8F9FAFFDA000C03010002110311003F00FD51E28A2BE94F9C3FFFD9'
                ))

        uploaded_files = []
        sample_files = [
            ('document1.txt', text_file_path),
            ('document2.txt', text_file_path),
            ('image1.jpg', image_file_path),
            ('image2.jpg', image_file_path),
            ('image3.jpg', image_file_path),
        ]

        from django.core.files import File

        for filename, path in sample_files:
            if UploadedFile.objects.filter(file__endswith=filename).exists():
                self.stdout.write(f'Uploaded file already exists: {filename}')
                continue
            file_obj = UploadedFile()
            with open(path, 'rb') as f:
                django_file = File(f)
                file_obj.file.save(filename, django_file, save=True)
            self.stdout.write(f'Created uploaded file: {file_obj.file.name}')
            uploaded_files.append(file_obj)

        return uploaded_files

    def _get_or_create_sample_user(self):
        # Create a sample user if one does not exist
        username = 'sampleuser'
        email = 'sampleuser@example.com'
        password = 'samplepassword'
        user, created = User.objects.get_or_create(username=username, defaults={'email': email})
        if created:
            user.set_password(password)
            user.save()
            self.stdout.write(f'Created sample user: {username}')
        else:
            self.stdout.write(f'Sample user already exists: {username}')
        return user

    def _create_user_profile(self, user):
        profile, created = UserProfile.objects.get_or_create(
            user=user,
            defaults={
                'address': '123 Sample Street, Sample City',
                'phone_number': '+1234567890',
                'social_categories': 'Sample Category',
                'iin': str(uuid.uuid4()),
            }
        )
        if created:
            self.stdout.write(f'Created user profile for: {user.username}')
        else:
            self.stdout.write(f'User profile already exists for: {user.username}')
        return profile

    def _create_applications(self, user):
        applications_data = [
            {
                'name': 'Заявка на покупку квартиры ЖК Botanical Garden',
                'status': 'in_progress',
                'creation_date': timezone.now().date(),
                'document_url': '',
            },
            {
                'name': 'Заявка на покупку квартиры ЖК Green Valley',
                'status': 'success',
                'creation_date': timezone.now().date(),
                'document_url': 'https://example.com/documents/green_valley.pdf',
            },
            {
                'name': 'Заявка на покупку квартиры ЖК Nova City',
                'status': 'fail',
                'creation_date': timezone.now().date(),
                'document_url': '',
            }
        ]
        applications = []
        for data in applications_data:
            application, created = Application.objects.get_or_create(
                name=data['name'],
                user=user,
                defaults=data
            )
            applications.append(application)
            if created:
                self.stdout.write(f'Created application: {application.name}')
            else:
                self.stdout.write(f'Application already exists: {application.name}')
        return applications
